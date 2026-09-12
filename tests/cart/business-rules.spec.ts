import { test, expect } from "@playwright/test";

import { login } from "../helper/auth/login";
import user from "../fixtures/users.json" with { type: "json" };

test.describe("Business rules", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");

    await login(page, user);
  });

  test.describe("Positive scenarios", () => {
    test("BR-001 - Add a product to the cart successfully", async ({
      page,
    }) => {
      const cartMenu = ["Item", "Description", "Price", "Quantity", "Total"];
      await page.locator("a.add-to-cart").first().click();

      await expect(page.getByText(/Product.*added/i)).toBeVisible();
      await page.getByRole("link", { name: "View Cart" }).click();

      for (let menu of cartMenu) {
        await expect(
          page.locator(".table.table-condensed").locator(".cart_menu"),
        ).toContainText(menu);
      }
    });
  });
});
