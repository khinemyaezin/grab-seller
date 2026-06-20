import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  use: { baseURL: "http://localhost:3000", trace: "retain-on-failure" },
  webServer: [
    { command: "npm run dev", cwd: "../seller-product-mfe", port: 3001, reuseExistingServer: true },
    { command: "npm run dev", cwd: "../seller-inventory-mfe", port: 3002, reuseExistingServer: true },
    { command: "npm run dev", cwd: ".", port: 3000, reuseExistingServer: true },
  ],
});
