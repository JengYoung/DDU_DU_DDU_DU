import { test, expect, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('todo-page: ', () => {
  test('페이지에 들어가면 Todo List 타이틀이 나와야 한다.', async ({
    page,
  }) => {
    await expect(page).toHaveTitle('Todo List');
  });

  test('페이지에 들어가면 input이 나와야 한다.', async ({ page }) => {
    const input = page.locator('#todo-input');
    await expect(input).toBeVisible();
  });

  test('페이지에 들어가면 input의 할 일을 등록하기 위한 button이 나와야 한다.', async ({
    page,
  }) => {
    const button = page.locator('.todo-button');
    await expect(button).toBeVisible();
  });
});

test.describe('todo-input', () => {
  let input: Locator | undefined;

  test.beforeEach(({ page }) => {
    input = page.locator('#todo-input');
  });

  test('사용자는 할 일을 추가하라는 문구를 볼 수 있다.', async () => {
    if (input === undefined) {
      expect('input이 렌더링되지 않았다.').toBe(false);
      return;
    }

    const placeholder = await input.getAttribute('placeholder');
    expect(placeholder).toBe('할 일을 입력하세요!');
  });
});

test.describe('todo-button', () => {
  let button: Locator | undefined;

  test.beforeEach(({ page }) => {
    button = page.locator('.todo-button');
    if (button === undefined) {
      expect('button이 렌더링되지 않았다.').toBe(false);
      return;
    }
  });

  test('버튼을 눌렀을 때, 적혀 있던 input값이 초기화되어야 한다.', async ({
    page,
  }) => {
    if (!button) return;

    const input = page.locator('#todo-input');

    await input.focus();
    await input.type('test');
    await button.click();

    const inputValue = await input.inputValue();

    expect(inputValue).toBe('');
  });
});
