import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router";
import { routes, type SellerRuntimeConfig, type User } from "@khinemyaezin/seller-contracts";

import { AuthProvider } from "./AuthProvider";
import { EntryLinkContext } from "./EntryLinkContext";

const authMocks = vi.hoisted(() => ({
  createAuthService: vi.fn(),
  getProfile: vi.fn(),
  logout: vi.fn(),
  refreshToken: vi.fn(),
}));

vi.mock("grab_seller_auth/AuthService", () => ({
  createAuthService: authMocks.createAuthService,
}));

const runtimeConfig: SellerRuntimeConfig = {
  appName: "Grab Store",
  apiBaseUrl: "/api",
};

const authenticatedUser: User = {
  id: "seller-1",
  email: "seller@example.com",
  name: "Seller Admin",
};

function renderAuthProvider(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <EntryLinkContext.Provider value={{ identity: { href: "/identity" } }}>
        <AuthProvider runtimeConfig={runtimeConfig}>
          <Routes>
            <Route path={`${routes.dashboard}/*`} element={<div>Dashboard page</div>} />
            <Route path={routes.login} element={<div>Login page</div>} />
          </Routes>
        </AuthProvider>
      </EntryLinkContext.Provider>
    </MemoryRouter>,
  );
}

describe("AuthProvider", () => {
  beforeEach(() => {
    authMocks.createAuthService.mockReset();
    authMocks.createAuthService.mockReturnValue({
      getProfile: authMocks.getProfile,
      logout: authMocks.logout,
      refreshToken: authMocks.refreshToken,
    });
    authMocks.getProfile.mockReset();
    authMocks.logout.mockReset();
    authMocks.refreshToken.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders protected dashboard routes after restoring an authenticated session", async () => {
    authMocks.getProfile.mockResolvedValue(authenticatedUser);

    renderAuthProvider(routes.dashboard);

    expect(await screen.findByText("Dashboard page")).toBeInTheDocument();
    expect(screen.queryByText("Login page")).not.toBeInTheDocument();
  });

  it("redirects a direct protected URL to login when no session is available", async () => {
    authMocks.getProfile.mockRejectedValue(new Error("No active session"));

    renderAuthProvider(routes.dashboard);

    expect(await screen.findByText("Login page")).toBeInTheDocument();
    expect(screen.queryByText("Dashboard page")).not.toBeInTheDocument();
  });
});
