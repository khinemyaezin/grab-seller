import { ReactNode, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { eventBus, configureApi } from "@khinemyaezin/seller-api";
import { SellerRuntimeConfig, SessionApi, SellerPlatform } from "@khinemyaezin/seller-contracts";

import { AuthContextValue, AuthContext } from "./AuthContext";
import { useAuthService, useSessionEffects, useSessionOperations, useSessionState } from "../hooks";

export function AuthProvider({
  children,
  runtimeConfig,
  onSessionCleared,
}: {
  children: ReactNode;
  runtimeConfig: Readonly<SellerRuntimeConfig>;
  onSessionCleared?: () => void;
}) {
  const navigate = useNavigate();
  const authService = useAuthService();

  const { snapshot, snapshotRef, publishSnapshot, subscribe } = useSessionState();

  const { loadSession, expireSession, refresh, logout } = useSessionOperations({
    authService,
    publishSnapshot,
    snapshotRef,
    onSessionCleared,
  });

  const session = useMemo<SessionApi>(() => ({
    getSnapshot: () => snapshotRef.current,
    subscribe,
    refresh,
    logout,
  }), [logout, refresh, snapshotRef, subscribe]);

  const platform = useMemo<SellerPlatform>(() => Object.freeze({
    version: "1.0.0",
    session,
    events: eventBus,
    navigation: {
      navigate(path: string, options?: { replace?: boolean }) {
        navigate(path, { replace: options?.replace });
      },
    },
    config: runtimeConfig,
  }), [navigate, runtimeConfig, session]);

  useEffect(() => {
    configureApi({
      baseUrl: runtimeConfig.apiBaseUrl,
      platform,
    });
  }, [platform, runtimeConfig.apiBaseUrl]);

  useSessionEffects({
    snapshot,
    loadSession,
  });

  const value = useMemo<AuthContextValue>(() => ({
    snapshot,
    user: snapshot.status === "authenticated" ? snapshot.user : null,
    roles: snapshot.status === "authenticated" ? snapshot.roles : [],
    permissions: snapshot.status === "authenticated" ? snapshot.permissions : [],
    isAuthenticated: snapshot.status === "authenticated",
    isLoading: snapshot.status === "loading",
    platform,
    refresh,
    logout,
  }), [logout, platform, refresh, snapshot]);

  return (
    <AuthContext.Provider value={value}>
     {children}
    </AuthContext.Provider>
  );
}
