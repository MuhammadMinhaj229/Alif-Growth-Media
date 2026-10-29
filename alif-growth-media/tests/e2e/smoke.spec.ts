import { expect, test } from "@playwright/test";

test("homepage presents the agency message and a clear contact action", async ({ page }) => {
  const response = await page.goto("/");
  const contactCta = page.getByRole("link", { name: /Discuss a project/i });

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/Alif Growth Media/i);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(contactCta).toHaveAttribute("href", "/contact");
});

test("homepage shows real projects and clear service categories", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /Considered solutions/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "SAFA Fresh" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "DT Interiors" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Sumera Collections" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Websites & digital experiences/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Digital systems & automation/i })).toBeVisible();
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
