import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var development = mode === "development";
    return {
        plugins: [
            react(),
            federation({
                name: "seller_shell",
                remotes: {
                    seller_product: {
                        type: "module",
                        name: "seller_product",
                        entry: development
                            ? "http://localhost:3001/mf-manifest.json"
                            : "/mfe/product/mf-manifest.json",
                    },
                    seller_inventory: {
                        type: "module",
                        name: "seller_inventory",
                        entry: development
                            ? "http://localhost:3002/mf-manifest.json"
                            : "/mfe/inventory/mf-manifest.json",
                    },
                },
                shared: {
                    react: { singleton: true, requiredVersion: "19.2.4" },
                    "react-dom": { singleton: true, requiredVersion: "19.2.4" },
                    "react-router": { singleton: true, requiredVersion: "7.18.0" },
                    "@tanstack/react-query": { singleton: true, requiredVersion: "5.99.2" },
                },
            }),
        ],
        server: {
            port: 3000,
            origin: "http://localhost:3000",
            proxy: { "/api": { target: "http://localhost:8080", changeOrigin: true } },
        },
        preview: { port: 3000 },
        build: { target: "chrome111" },
    };
});
