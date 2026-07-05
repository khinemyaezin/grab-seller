import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig(({ mode }) => {
  const development = mode === "development";
  const env = loadEnv(mode, process.cwd(), "")
  return {
    plugins: [
      react(),
      federation({
        name: "seller_shell",
        dts: {
          consumeTypes: {
            remoteTypeUrls: {
              grab_seller_auth: {
                api: "http://localhost:3003/@mf-types.d.ts",
                zip: "http://localhost:3003/@mf-types.zip",
              },
              grab_seller_account: {
                api: "http://localhost:3004/@mf-types.d.ts",
                zip: "http://localhost:3004/@mf-types.zip",
              },
            },
            abortOnError: false,
          },
        },
        remotes: {
          grab_seller_auth: {
            type: "module",
            name: "grab_seller_auth",
            entry: "/mfe/seller-auth/mf-manifest.json",
          },
          grab_seller_account: {
            type: "module",
            name: "grab_seller_account",
            entry: "/mfe/seller-account/mf-manifest.json",
          },
        },
        shared: {
          react: { singleton: true, requiredVersion: "19.2.4" },
          "react-dom": { singleton: true, requiredVersion: "19.2.4" },
          "react-router": { singleton: true, requiredVersion: "7.18.0" },
          "@tanstack/react-query": { singleton: true, requiredVersion: "5.99.2" },
          "@khinemyaezin/seller-api": { singleton: true, requiredVersion: "^1.0.1-canary-a7c1b65" },
        },
      }),
    ],
    resolve: {
      alias: {},
    },
    server: {
      port: 3000,
      origin: env.VITE_ORIGIN,
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          xfwd: true,
          headers: {
            "X-Platform": "SELLER_PORTAL"
          }
        },
        "/mfe/seller-auth/": {
          target: "http://localhost:3003",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mfe\/seller-auth/, ""),
        },
        "/mfe/seller-account/": {
          target: "http://localhost:3004",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mfe\/seller-account/, ""),
        },
      },
    },
    preview: { port: 3000 },
    build: { target: "chrome111" },
  };
});
