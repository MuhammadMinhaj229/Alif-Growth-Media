import { expect, test } from "@playwright/test";

test("homepage introduces the agency and contact path", async ({ page }) => {
  const response = await page.goto("/");
  const contactCta = page.getByRole("link", { name: /Discuss a project/i });
  const mainHeading = page.getByRole("heading", { level: 1 });

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/Alif Growth Media/i);
  await expect(mainHeading).toBeVisible();
  await expect(contactCta).toHaveAttribute("href", "/contact");
});

test("homepage presents selected client work and service categories", async ({ page }) => {
  await page.goto("/");
  const heading = (name: string | RegExp) => page.getByRole("heading", { name });

  await expect(heading(/Considered solutions/i)).toBeVisible();
  await expect(heading("SAFA Fresh")).toBeVisible();
  await expect(heading("DT Interiors")).toBeVisible();
  await expect(heading("Sumera Collections")).toBeVisible();
  await expect(heading(/Websites & digital experiences/i)).toBeVisible();
  await expect(heading(/Digital systems & automation/i)).toBeVisible();
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
