import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "@grab/seller-ui";
import { routes, type SellerRuntimeConfig } from "@grab/seller-contracts";
import { AuthProvider } from "./AuthContext";
import { DashboardLayout } from "../components/DashboardLayout";
import { RemoteBoundary } from "../components/RemoteBoundary";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

const loadProduct = () => import("grab_seller_product/Routes");
const loadInventory = () => import("grab_seller_inventory/Routes");

export default function App({ runtimeConfig }: { runtimeConfig: Readonly<SellerRuntimeConfig> }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path={routes.home} element={<Navigate to={routes.dashboard} replace />} />
              <Route path={routes.login} element={<LoginPage />} />
              <Route path={routes.dashboard} element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="products/*" element={
                  <RemoteBoundary
                    loader={loadProduct}
                    label="Products"
                    config={runtimeConfig}
                  />} />
                <Route path="locations/*" element={
                  <RemoteBoundary
                    loader={loadInventory}
                    label="Inventory"
                    config={runtimeConfig} />
                } />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
