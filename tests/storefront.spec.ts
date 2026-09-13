import { test, expect } from "@playwright/test";
const instagram = "https://www.instagram.com/cloudbunbakery/";
const facebook =
  "https://www.facebook.com/p/Cloud-Bun-Bakery-LLC-61592804541512/";
test("static menu and direct social contact on desktop and mobile", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  if (testInfo.project.name === "desktop") {
    await expect(
      page.getByRole("button", { name: "Open menu", exact: true }),
    ).toBeHidden();
  }
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Freshly baked.",
  );
  await expect(
    page.getByRole("img", { name: "Cloud Bun Bakery LLC logo" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "[ Place an Order ]", exact: true }),
  ).toHaveAttribute("href", "#pickup");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  for (const photo of await page
    .locator('img[src^="/images/bakery/"]:visible')
    .all()) {
    await photo.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        photo.evaluate((image: HTMLImageElement) => image.naturalWidth),
      )
      .toBeGreaterThan(0);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: testInfo.outputPath("home.png"),
    fullPage: true,
  });
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open menu", exact: true }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Menu", exact: true })
      .click();
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toHaveCount(0);
  }
  for (const label of ["View Menu", "See Full Menu"]) {
    const trigger = page.getByRole("button", {
      name: `[ ${label} ]`,
      exact: true,
    });
    await trigger.click();
    const preview = page.getByRole("dialog", {
      name: "Original menu",
      exact: true,
    });
    await expect(preview).toBeVisible();
    expect(page.context().pages()).toHaveLength(1);
    await preview.getByRole("button", { name: "Close original menu" }).click();
    await expect(preview).not.toBeVisible();
    await expect(trigger).toBeFocused();
  }
  const menuTrigger = page.getByRole("button", {
    name: "[ Original Menu ]",
    exact: true,
  });
  await menuTrigger.click();
  const menuDialog = page.getByRole("dialog", {
    name: "Original menu",
    exact: true,
  });
  await expect(menuDialog).toBeVisible();
  const menuImage = menuDialog.getByRole("img");
  await expect(menuImage).toBeVisible();
  await expect
    .poll(() =>
      menuImage.evaluate((image: HTMLImageElement) => image.naturalWidth),
    )
    .toBeGreaterThan(0);
  expect(page.context().pages()).toHaveLength(1);
  await page.screenshot({ path: testInfo.outputPath("menu-modal.png") });
  await page.keyboard.press("Escape");
  await expect(menuDialog).not.toBeVisible();
  await expect(menuTrigger).toBeFocused();
  await menuTrigger.click();
  await page.getByRole("button", { name: "Close original menu" }).click();
  await expect(menuDialog).not.toBeVisible();
  await page.goto("/menu/?category=Cookies");
  await expect(
    page.getByRole("heading", { name: "Chocolate Crinkles" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Classic Ensaymada" }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "All bakes", exact: true }).click();
  await page
    .getByRole("textbox", { name: "Search bakes" })
    .fill("not-a-real-bake");
  await expect(
    page.getByRole("heading", { name: "No bakes found." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(
    page.getByRole("heading", { name: "Classic Ensaymada", exact: true }),
  ).toBeVisible();
  await expect(page.locator('a[href^="/products/"]')).toHaveCount(0);
  await page.goto("/");
  await page.getByRole("link", { name: /Craving ensaymada\?/ }).click();
  const favorites = page.locator("#menu");
  await expect(
    favorites.getByRole("button", { name: "Ensaymada", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(favorites.locator("details")).toHaveCount(2);
  await favorites
    .locator("summary")
    .filter({ hasText: "Classic Ensaymada" })
    .click();
  await expect(
    favorites
      .locator("details[open]")
      .getByText("Oreo · Biscoff · Toasted coconut · Almonds", {
        exact: false,
      }),
  ).toBeVisible();
  await favorites
    .getByRole("button", { name: "Sweet bakes", exact: true })
    .click();
  await expect(favorites.locator("details")).toHaveCount(5);
  await page.getByRole("link", { name: /Craving ensaymada\?/ }).click();
  await expect(favorites.locator("details")).toHaveCount(2);
  await favorites
    .getByRole("button", { name: "All bakes", exact: true })
    .click();
  await expect(favorites.locator("details")).toHaveCount(11);
  await expect(page.locator('a[href^="/products/"]')).toHaveCount(0);
  await page
    .locator("#selection")
    .screenshot({ path: testInfo.outputPath("collection.png") });
  await favorites.screenshot({ path: testInfo.outputPath("favorites.png") });
  await page.goto("/contact/");
  await expect(
    page
      .getByRole("link", { name: "Message on Instagram", exact: true })
      .first(),
  ).toHaveAttribute("href", instagram);
  await expect(
    page
      .getByRole("link", { name: "Message on Facebook", exact: true })
      .first(),
  ).toHaveAttribute("href", facebook);
  await page.screenshot({
    path: testInfo.outputPath("contact.png"),
    fullPage: true,
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
  expect(errors).toEqual([]);
});
test("static HTML is indexable and commerce routes are gone", async ({
  request,
}) => {
  const menu = await request.get("/menu/");
  expect(menu.status()).toBe(200);
  expect(await menu.text()).toContain("Classic Ensaymada");
  const product = await request.get("/products/classic-ensaymada/");
  expect(product.status()).toBe(404);
  const home = await request.get("/");
  expect(await home.text()).toContain("application/ld+json");
  for (const path of ["/account/", "/api/checkout/", "/shop/"]) {
    expect((await request.get(path)).status()).toBe(404);
  }
  expect((await request.get("/robots.txt")).status()).toBe(200);
});
