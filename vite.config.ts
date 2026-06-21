import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig(({ mode }) => {
  const development = mode === "development";
  return {
    plugins: [
      react(),
      federation({
        name: "seller_shell",
        remotes: {
          grab_seller_product: {
            type: "module",
            name: "grab_seller_product",
            entry: development
              ? "http://localhost:3001/mf-manifest.json"
              : "/mfe/grab-seller-product/mf-manifest.json",
          },
          grab_seller_inventory: {
            type: "module",
            name: "grab_seller_inventory",
            entry: development
              ? "http://localhost:3002/mf-manifest.json"
              : "/mfe/grab-seller-inventory/mf-manifest.json",
          },
        },
        shared: {
          react: { singleton: true, requiredVersion: "19.2.4" },
          "react-dom": { singleton: true, requiredVersion: "19.2.4" },
          "react-router": { singleton: true, requiredVersion: "7.18.0" },
          "@tanstack/react-query": { singleton: true, requiredVersion: "5.99.2" },
          "@grab/seller-api": { singleton: true, requiredVersion: "0.1.0" },
        },
      }),
    ],
    server: {
      port: 3000,
      origin: "http://localhost:3000",
      proxy: { "/api": { target: "http://localhost:8080", changeOrigin: true, xfwd: true } },
    },
    preview: { port: 3000 },
    build: { target: "chrome111" },
  };
});
