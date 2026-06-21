import { expect, test } from "@playwright/test";

test("switches repeatedly between federated domains without a document navigation", async ({ page }) => {
  await page.goto("/dashboard/products");
  await expect(page.getByRole("heading", { name: "Products" })).toBeVisible();
  const navigationStart = await page.evaluate(() => performance.timeOrigin);

  await page.getByRole("link", { name: "Locations" }).click();
  await expect(page).toHaveURL(/\/dashboard\/locations$/);
  await expect(page.getByRole("heading", { name: "Location" })).toBeVisible();

  await page.getByRole("link", { name: "Products" }).click();
  await expect(page).toHaveURL(/\/dashboard\/products$/);
  await expect(page.getByRole("heading", { name: "Products" })).toBeVisible();

  await page.getByRole("link", { name: "Locations" }).click();
  await expect(page).toHaveURL(/\/dashboard\/locations$/);
  await expect(page.getByRole("heading", { name: "Location" })).toBeVisible();

  const navigationAfterSwitch = await page.evaluate(() => performance.timeOrigin);
  expect(navigationAfterSwitch).toBe(navigationStart);
});

test("supports a direct refresh of a nested inventory route", async ({ page }) => {
  await page.goto("/dashboard/locations/location-1/zones");
  await expect(page.getByRole("heading", { name: "Zones" })).toBeVisible();
});
