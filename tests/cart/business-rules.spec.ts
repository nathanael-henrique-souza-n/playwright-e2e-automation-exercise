import { test, expect } from "@playwright/test";

import { login } from "../helper/auth/login";
import user from "../fixtures/users.json" with { type: "json" };
import { checkProductCart } from "../helper/cart/cart";

test.describe("Business rules", () => {
  test.beforeEach(async ({ page, context }) => {
    context.clearCookies();
    await page.goto("/login");
    await login(page, user);
  });

  test.describe("Positive scenarios", () => {
    test("BR-002 - Increase the quantity of a product in the cart", async ({
      page,
    }) => {
      const initialQuantity = Number(page.locator(".disabled").textContent());
      const curretQuantity = Number(initialQuantity + 1);

      await page.locator("a.add-to-cart").first().click();

      await expect(page.getByText(/Product.*added/i)).toBeVisible();
      await page.getByRole("link", { name: "View Cart" }).click();
      checkProductCart(page);

      expect(Number(initialQuantity)).toBe(curretQuantity);
    });
  });
});
