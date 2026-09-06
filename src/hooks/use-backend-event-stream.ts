import { useEffect, useMemo } from "react";
import { createBackendEventStream, resolveLink } from "@khinemyaezin/seller-api";
import type {
  EventPayloads,
  SellerPlatform,
  SessionSnapshot,
} from "@khinemyaezin/seller-contracts";
import { useEntryGet } from "./use-entry";

type WorkflowUpdatedV1 = EventPayloads["workflow:updated:v1"] & {
  idempotencyKey?: string;
};

function fallbackEventStreamUrl(apiBaseUrl: string): string {
  return `${apiBaseUrl.replace(/\/$/, "")}/events/stream`;
}

function parseReadyProducerId(data: string): "backend" | "host" {
  try {
    const parsed = JSON.parse(data) as { producerId?: unknown };
    if (parsed.producerId === "host" || parsed.producerId === "backend") {
      return parsed.producerId;
    }
  } catch {
    // Ignore malformed ready payloads and default to backend.
  }
  return "backend";
}

function parseWorkflowFrame(data: string): WorkflowUpdatedV1 | null {
  try {
    const parsed = JSON.parse(data) as Record<string, unknown>;
    if (
      typeof parsed.workflowId !== "string" ||
      typeof parsed.workflowName !== "string" ||
      typeof parsed.status !== "string"
    ) {
      return null;
    }
    return {
      producerId: typeof parsed.producerId === "string" ? parsed.producerId : "backend",
      workflowId: parsed.workflowId,
      workflowName: parsed.workflowName,
      status: parsed.status,
      idempotencyKey:
        typeof parsed.idempotencyKey === "string" ? parsed.idempotencyKey : undefined,
      errorMessage: typeof parsed.errorMessage === "string" ? parsed.errorMessage : undefined,
    };
  } catch {
    return null;
  }
}

export function useBackendEventStream(
  platform: SellerPlatform,
  snapshot: SessionSnapshot,
): void {
  const { data, isFetched } = useEntryGet({ href: platform.config.apiBaseUrl });
  const events = platform.events;
  const refresh = platform.session.refresh;
  const scopeId =
    snapshot.status === "authenticated"
      ? snapshot.user.currentAccessContext?.scopeId
      : undefined;

  const streamUrl = useMemo(() => {
    const discovered = resolveLink(data?._links, "event-stream")?.href;
    if (discovered) {
      return discovered;
    }
    if (isFetched) {
      return fallbackEventStreamUrl(platform.config.apiBaseUrl);
    }
    return undefined;
  }, [data?._links, isFetched, platform.config.apiBaseUrl]);

  useEffect(() => {
    if (snapshot.status !== "authenticated" || !streamUrl) {
      return;
    }

    const controller = new AbortController();
    const reason = "abort" as const;

    void createBackendEventStream({
      url: streamUrl,
      signal: controller.signal,
      refresh,
      onFrame: (frame) => {
        if (frame.event === "ready") {
          events.emit("stream:ready:v1", {
            producerId: parseReadyProducerId(frame.data),
            lastEventId: frame.id,
          });
          return;
        }
        if (frame.event !== "workflow") {
          return;
        }
        const payload = parseWorkflowFrame(frame.data);
        if (payload) {
          events.emit("workflow:updated:v1", payload);
        }
      },
      onDisconnected: () => {
        if (controller.signal.aborted) {
          return;
        }
        events.emit("stream:disconnected:v1", {
          producerId: "host",
          reason: "error",
        });
      },
    });

    return () => {
      controller.abort();
      events.emit("stream:disconnected:v1", {
        producerId: "host",
        reason,
      });
    };
  }, [events, refresh, scopeId, snapshot.status, streamUrl]);
}
