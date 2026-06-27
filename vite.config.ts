import { fileURLToPath, URL } from "node:url";
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
            abortOnError: false,
          },
        },
        remotes: {
          grab_seller_auth: {
            type: "module",
            name: "grab_seller_auth",
            entry: development
              ? "http://localhost:3003/mf-manifest.json"
              : "/mfe/grab-seller-auth/mf-manifest.json",
          },
        },
        shared: {
          react: { singleton: true, requiredVersion: "19.2.4" },
          "react-dom": { singleton: true, requiredVersion: "19.2.4" },
          "react-router": { singleton: true, requiredVersion: "7.18.0" },
          "@tanstack/react-query": { singleton: true, requiredVersion: "5.99.2" },
          "@khinemyaezin/seller-api": { singleton: true, requiredVersion: "1.0.0" },
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
          xfwd: true
        }
      },
    },
    preview: { port: 3000 },
    build: { target: "chrome111" },
  };
});
