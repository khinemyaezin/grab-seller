import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "@khinemyaezin/seller-ui";
import { routes, type SellerRuntimeConfig } from "@khinemyaezin/seller-contracts";
import { useAuth } from "./AuthContext";
import { DashboardLayout } from "../components/DashboardLayout";
import { RemoteBoundary } from "../components/RemoteBoundary";
import DashboardPage from "../pages/DashboardPage";
import { AuthProvider } from "./AuthProvider";
import { EntryLinkProvider } from "./EntryLinkProvider";
import { useEntryLink } from "./EntryLinkContext";

const loadAuth = () => import("grab_seller_auth/Routes");

function ShellRoutes() {
  const { platform, isAuthenticated } = useAuth();
  const identityLink = useEntryLink("identity");

  if (!identityLink) {
    return <div role="status" className="p-8 text-sm text-muted-foreground">Loading seller modules…</div>;
  }

  return (
    <Routes>
      <Route path={routes.home} element={<Navigate to={routes.dashboard} replace />} />
      {isAuthenticated && (
        <Route path={routes.dashboard} element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      )}
      <Route path="/*" element={
        <RemoteBoundary
          key="seller-auth"
          loader={loadAuth}
          label="Auth"
          remoteProps={{
            platform,
            basePath: "/",
            link: identityLink,
          }}
        />
      } />

    </Routes>
  );
}

export default function App({ runtimeConfig }: { runtimeConfig: Readonly<SellerRuntimeConfig> }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <EntryLinkProvider runtimeConfig={runtimeConfig}>
            <AuthProvider runtimeConfig={runtimeConfig} onSessionCleared={() => queryClient.clear()}>
              <ShellRoutes />
            </AuthProvider>
          </EntryLinkProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
