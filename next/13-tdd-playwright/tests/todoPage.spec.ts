import { test, expect } from "@playwright/test";

test("페이지에 들어가면 Todo List 타이틀이 나와야 한다.", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle("Todo List");
});
