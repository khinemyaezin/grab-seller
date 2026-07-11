import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { eventBus } from "@khinemyaezin/seller-api";
import { SessionSnapshot, routes } from "@khinemyaezin/seller-contracts";

const GLOBAL_SCOPE_KEY = "*";

const isAuthPath = (pathname: string) => {
  const normalized = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  return (
    normalized === routes.login ||
    normalized.startsWith(`${routes.login}/`) ||
    normalized === routes.register ||
    normalized.startsWith(`${routes.register}/`)
  );
};

const currentPath = (location: ReturnType<typeof useLocation>) =>
  `${location.pathname}${location.search}${location.hash}`;

export function useSessionEffects({
  snapshot,
  loadSession,
  onSessionCleared,
}: {
  snapshot: SessionSnapshot;
  loadSession: () => Promise<SessionSnapshot>;
  onSessionCleared?: () => void
}) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    void loadSession();
  }, [loadSession]);

  useEffect(() => {
    if (snapshot.status === "anonymous" && !isAuthPath(location.pathname)) {
      navigate(`/${routes.login}`, {
        replace: true,
        state: { from: currentPath(location) },
      });
      return;
    }

    if (snapshot.status === "authenticated") {
      const nonGlobalContexts = snapshot.user.accessContexts.filter(
        (ctx) => ctx.scopeId !== GLOBAL_SCOPE_KEY
      );

      if (nonGlobalContexts.length === 0) {
        if (!location.pathname.startsWith("/onboarding")) {
          navigate("/onboarding", { replace: true });
        }
      } else if (
        !snapshot.user.currentAccessContext ||
        snapshot.user.currentAccessContext.scopeId === GLOBAL_SCOPE_KEY
      ) {
        if (location.pathname !== `/${routes.contextSelection}`) {
          navigate(`/${routes.contextSelection}`, { replace: true });
        }
      } else if (isAuthPath(location.pathname)) {
        navigate("", { replace: true });
      }
    }
  }, [location, navigate, snapshot]);

  useEffect(() => {
    const handleAuthRedirect = (next: SessionSnapshot) => {
      if (next.status === "authenticated") {
        const nonGlobalContexts = next.user.accessContexts.filter(
          (ctx) => ctx.scopeId !== GLOBAL_SCOPE_KEY
        );

        if (nonGlobalContexts.length === 0) {
          navigate("/onboarding", { replace: true });
        } else if (
          !next.user.currentAccessContext ||
          next.user.currentAccessContext.scopeId === GLOBAL_SCOPE_KEY
        ) {
          navigate(`/${routes.contextSelection}`, { replace: true });
        } else {
          navigate("", { replace: true });
        }
      }
    };

    const unsubLogin = eventBus.subscribe("auth:login-success:v1", () => {
      void loadSession().then(handleAuthRedirect);
    });

    const unsubRegister = eventBus.subscribe("auth:registration-success:v1", () => {
      navigate(`/${routes.login}`, { replace: true });
    });

    const unsubAccessContextOnSelect = eventBus.subscribe("auth:context-selected:v1", () => {
      onSessionCleared?.();
      void loadSession().then(handleAuthRedirect);
    });

    return () => {
      unsubLogin();
      unsubRegister();
      unsubAccessContextOnSelect();
    };
  }, [loadSession, navigate]);
}
