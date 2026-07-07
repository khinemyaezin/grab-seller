import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router";
import { useSessionEffects } from "./use-session-effect";
import { eventBus } from "@khinemyaezin/seller-api";
import { SessionSnapshot, routes } from "@khinemyaezin/seller-contracts";

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...(actual as object),
    useNavigate: () => mockNavigate,
  };
});

describe("useSessionEffects", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const defaultSnapshot: SessionSnapshot = {
    status: "anonymous",
  };

  it("subscribes to auth:login-success:v1 and reloads session", async () => {
    const mockLoadSession = vi.fn().mockResolvedValue({ 
      status: "authenticated", 
      user: { accessContext: { scopeId: "some-scope" } } 
    });
    
    const subscribeSpy = vi.spyOn(eventBus, "subscribe");
    
    renderHook(
      () => useSessionEffects({ snapshot: defaultSnapshot, loadSession: mockLoadSession }),
      {
        wrapper: ({ children }: any) => <MemoryRouter initialEntries={[`/${routes.login}`]}>{children}</MemoryRouter>,
      }
    );

    expect(mockLoadSession).toHaveBeenCalledTimes(1);

    const loginSubscriptionCall = subscribeSpy.mock.calls.find(call => call[0] === "auth:login-success:v1");
    expect(loginSubscriptionCall).toBeDefined();

    const loginCallback = loginSubscriptionCall![1];

    loginCallback({});

    expect(mockLoadSession).toHaveBeenCalledTimes(2);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("", { replace: true });
    });
  });

  it("subscribes to auth:registration-success:v1 and navigates to login", () => {
    const mockLoadSession = vi.fn().mockResolvedValue(defaultSnapshot);
    const subscribeSpy = vi.spyOn(eventBus, "subscribe");

    renderHook(
      () => useSessionEffects({ snapshot: defaultSnapshot, loadSession: mockLoadSession }),
      {
        wrapper: ({ children }: any) => <MemoryRouter initialEntries={[`/${routes.register}`]}>{children}</MemoryRouter>,
      }
    );

    const registerSubscriptionCall = subscribeSpy.mock.calls.find(call => call[0] === "auth:registration-success:v1");
    expect(registerSubscriptionCall).toBeDefined();

    const registerCallback = registerSubscriptionCall![1];

    registerCallback({});

    expect(mockNavigate).toHaveBeenCalledWith(`/${routes.login}`, { replace: true });
  });
});
