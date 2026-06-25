import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "@khinemyaezin/seller-ui";
import { routes, type SellerRuntimeConfig } from "@khinemyaezin/seller-contracts";
import { AuthProvider } from "./AuthContext";
import { DashboardLayout } from "../components/DashboardLayout";
import { RemoteBoundary } from "../components/RemoteBoundary";

const loadAuth = () => import("grab_seller_auth/Routes");

export default function App({ runtimeConfig }: { runtimeConfig: Readonly<SellerRuntimeConfig> }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path={routes.home} element={<Navigate to={routes.dashboard} replace />} />
              <Route path={routes.dashboard} element={<DashboardLayout />}>
              </Route>
              <Route path="/*" element={
                <RemoteBoundary
                  key="seller-auth"
                  loader={loadAuth}
                  label="Auth"
                  remoteProps={{ identityLink: { href: "http://localhost:3000/api/v1/identity" } }}
                />
              } />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
