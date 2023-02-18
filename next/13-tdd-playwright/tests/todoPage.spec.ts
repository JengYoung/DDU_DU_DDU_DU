import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("todo-page: ", () => {
  test("페이지에 들어가면 Todo List 타이틀이 나와야 한다.", async ({
    page,
  }) => {
    await expect(page).toHaveTitle("Todo List");
  });

  test("페이지에 들어가면 input이 나와야 한다.", async ({ page }) => {
    const input = page.locator("#todo-input");
    await expect(input).toBeVisible();
  });
});
