import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { eventBus } from "@khinemyaezin/seller-api";
import { SessionSnapshot, routes } from "@khinemyaezin/seller-contracts";

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
}: {
  snapshot: SessionSnapshot;
  loadSession: () => Promise<SessionSnapshot>;
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
    }

    if (snapshot.status === "authenticated" && isAuthPath(location.pathname)) {
      navigate("", { replace: true });
    }
  }, [location, navigate, snapshot.status]);

  useEffect(() => {
    const unsubLogin = eventBus.subscribe("auth:login-success:v1", () => {
      void loadSession().then((next) => {
        if (next.status === "authenticated") {
          navigate("", { replace: true });
        }
      });
    });

    const unsubRegister = eventBus.subscribe("auth:registration-success:v1", () => {
      navigate(`/${routes.login}`, { replace: true })
    });

    return () => {
      unsubLogin();
      unsubRegister();
    };
  }, [loadSession, navigate]);
}
