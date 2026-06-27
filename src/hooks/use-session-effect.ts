import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { eventBus } from "@khinemyaezin/seller-api";
import { SessionSnapshot, routes } from "@khinemyaezin/seller-contracts";

const isAuthPath = (pathname: string) =>
  pathname === routes.login ||
  pathname.startsWith(`${routes.login}/`) ||
  pathname === routes.register ||
  pathname.startsWith(`${routes.register}/`);

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
      navigate(routes.login, {
        replace: true,
        state: { from: currentPath(location) },
      });
    }

    if (snapshot.status === "authenticated" && isAuthPath(location.pathname)) {
      navigate(routes.dashboard, { replace: true });
    }
  }, [location, navigate, snapshot.status]);

  useEffect(() => {
    return eventBus.subscribe("auth:login-success:v1", () => {
      void loadSession().then((next) => {
        if (next.status === "authenticated") {
          navigate(routes.dashboard, { replace: true });
        }
      });
    });
  }, [loadSession, navigate]);
}
