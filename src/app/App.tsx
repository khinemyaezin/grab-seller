import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "@khinemyaezin/seller-ui";
import { routes, type SellerRuntimeConfig } from "@khinemyaezin/seller-contracts";
import { useAuth } from "./AuthContext";
import { RemoteBoundary } from "../components/RemoteBoundary";
import { AuthProvider } from "./AuthProvider";
import { EntryLinkProvider } from "./EntryLinkProvider";
import { useEntryLink } from "./EntryLinkContext";
import { DashboardLayout } from "../components/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import { useMerchantOnboardingEffect } from "../hooks";

import { SimpleLayout } from "../components/SimpleLayout";

const loadAuth = () => import("grab_seller_auth/Routes");
const loadSellerAccount = () => import("grab_seller_account/Routes");
const loadSellerProduct = () => import("grab_seller_product/Routes");
const loadInventory = () => import("grab_seller_inventory/Routes")

function ShellRoutes() {
  const { platform, isAuthenticated } = useAuth();
  const identityLink = useEntryLink("identity");
  const merchantLink = useEntryLink("merchant");
  const catalogLink = useEntryLink("catalog");
  const inventoryLink = useEntryLink("inventory");

  useMerchantOnboardingEffect();

  return (
    <Routes>
      <Route path={routes.home} element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        {catalogLink && (
          <Route path={`/${routes.products}/*`} element={
            <RemoteBoundary
              loader={loadSellerProduct}
              label="Products"
              remoteProps={{
                platform,
                link: catalogLink
              }}
            />
          } />
        )}
        {inventoryLink && (
          <Route path={`${routes.locations}/*`} element={
            <RemoteBoundary
              loader={loadInventory}
              label="Inventory"
              remoteProps={{
                platform,
                link: inventoryLink
              }}
            />
          } />
        )}
      </Route>
      <Route element={<SimpleLayout />}>
        {merchantLink && (
          <Route path="/onboarding/*" element={
            <RemoteBoundary
              loader={loadSellerAccount}
              label="Onboarding"
              remoteProps={{
                platform,
                link: merchantLink
              }}
            />
          }
          />
        )}
        {identityLink && (
          <Route path="/*" element={
            <RemoteBoundary
              key="seller-auth"
              loader={loadAuth}
              label="Auth"
              remoteProps={{
                platform,
                link: identityLink
              }}
            />
          } />
        )}
      </Route>
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
