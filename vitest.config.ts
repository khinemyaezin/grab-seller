import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@khinemyaezin/seller-api": fileURLToPath(new URL("../grab-seller-shared-ui/packages/seller-api/src/index.ts", import.meta.url)),
      "@khinemyaezin/seller-contracts": fileURLToPath(new URL("../grab-seller-shared-ui/packages/seller-contracts/src/index.ts", import.meta.url)),
      "grab_seller_auth/AuthService": fileURLToPath(new URL("./src/test/mocks/grab-seller-auth-service.ts", import.meta.url)),
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    server: {
      deps: {
        inline: [/@khinemyaezin/],
      },
    },
  },
});
