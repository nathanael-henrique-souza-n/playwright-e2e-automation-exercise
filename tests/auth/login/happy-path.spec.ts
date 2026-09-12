import { test, expect } from "@playwright/test";

import { login } from "../../helper/auth/login";
import user from "../../fixtures/users.json" with { type: "json" };

test.describe("Happy Path", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test.describe("Positive scenarios", () => {
    test("BR-001 - User should be able to login with valid credentials", async ({
      page,
    }) => {
      await login(page, user);

      await expect(
        await page.getByText(`Logged in as ${user.name}`),
      ).toBeVisible();
    });
  });
});
