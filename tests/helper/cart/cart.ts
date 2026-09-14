import { type Page, expect } from "@playwright/test";

const cartMenu = ["Item", "Description", "Price", "Quantity", "Total"];

export async function checkProductCart(page: Page) {
  for (let menu of cartMenu) {
    await expect(
      page.locator(".table.table-condensed").locator(".cart_menu"),
    ).toContainText(menu);
    break;
  }
}
