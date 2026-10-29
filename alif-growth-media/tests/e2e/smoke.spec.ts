import { expect, test } from "@playwright/test";

test("homepage renders its main heading and primary call to action", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/Alif Growth Media/i);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Free Tech Architecture Audit/i }).first(),
  ).toHaveAttribute("href", "/contact");
});

test("key public routes load with a visible page heading", async ({ page }) => {
  for (const route of ["/services", "/work", "/about", "/contact"]) {
    const response = await page.goto(route);

    expect(response?.status(), `${route} should return HTTP 200`).toBe(200);
    await expect(
      page.getByRole("heading", { level: 1 }).first(),
      `${route} should show a primary heading`,
    ).toBeVisible();
  }
});

test("homepage fits a narrow mobile viewport without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    viewportWidth: document.documentElement.clientWidth,
    pageWidth: document.documentElement.scrollWidth,
  }));

  expect(
    dimensions.pageWidth,
    "The homepage should not scroll horizontally on a 390px viewport",
  ).toBeLessThanOrEqual(dimensions.viewportWidth + 1);
});
