import { expect, test } from "@playwright/test";

test("homepage renders its main heading and primary call to action", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/Alif Growth Media/i);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: /Tell us what you need/i })).toHaveAttribute(
    "href",
    "/contact",
  );
});

test("homepage preview and solution selector update their content", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("tab", { name: "Customers" }).click();
  await expect(page.getByRole("heading", { name: /Every chat has a next step/i })).toBeVisible();

  await page.getByRole("tab", { name: "Operations" }).click();
  await expect(page.getByRole("heading", { name: /Your business, at a glance/i })).toBeVisible();

  await page.getByRole("tab", { name: "Website" }).click();
  await expect(page.getByRole("heading", { name: /Good food/i })).toBeVisible();

  await page.getByRole("button", { name: /Convert enquiries/i }).click();
  await expect(page.getByRole("heading", { name: /Make every enquiry easier to follow up/i })).toBeVisible();

  await page.getByRole("button", { name: /Run the business/i }).click();
  await expect(
    page.getByRole("heading", { name: /Know what's happening without chasing updates/i }),
  ).toBeVisible();
});

test("key public routes load with a visible page heading", async ({ page }) => {
  for (const route of ["/services", "/work", "/about", "/contact"]) {
    const response = await page.goto(route);

    expect(response?.status(), route + " should return HTTP 200").toBe(200);
    await expect(
      page.getByRole("heading", { level: 1 }).first(),
      route + " should show a primary heading",
    ).toBeVisible();
  }
});

test("mobile navigation opens, follows a route, and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const menuButton = page.locator(".site-header__menu-button");
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  const mobileMenu = page.locator(".site-menu");
  await expect(mobileMenu).toBeVisible();
  await mobileMenu.getByRole("link", { name: "Work" }).click();
  await expect(page).toHaveURL(/work$/);
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
});

test("homepage fits a narrow mobile viewport without horizontal overflow", async ({ page }) => {
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
