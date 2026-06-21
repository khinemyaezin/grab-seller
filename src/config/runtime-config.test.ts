import { afterEach, describe, expect, it, vi } from "vitest";
import { loadRuntimeConfig } from "./runtime-config";

describe("loadRuntimeConfig", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("loads and freezes shell runtime configuration", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(JSON.stringify({
      appName: "Seller Test",
      apiBaseUrl: "/api/test"
    }), { status: 200 }));

    const config = await loadRuntimeConfig();

    expect(config).toMatchObject({
      appName: "Seller Test",
      apiBaseUrl: "/api/test"
    });
    expect(Object.isFrozen(config)).toBe(true);
  });

  it("falls back to safe defaults when configuration cannot be loaded", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("offline"));
    vi.spyOn(console, "warn").mockImplementation(() => undefined);

    await expect(loadRuntimeConfig()).resolves.toMatchObject({
      appName: "Grab Store",
      apiBaseUrl: "/api"
    });
  });

  it("rejects protocol-relative API URLs", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(JSON.stringify({
      apiBaseUrl: "//untrusted.example",
    }), { status: 200 }));

    await expect(loadRuntimeConfig()).resolves.toMatchObject({ apiBaseUrl: "/api" });
  });
});
