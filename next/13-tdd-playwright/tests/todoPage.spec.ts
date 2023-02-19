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

  test('페이지에 들어가면 input의 할 일을 모아 놓은 todo-list가 나와야 한다.', async ({
    page,
  }) => {
    const todoList = page.locator('.todo-list');
    await expect(todoList).toBeDefined();
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
  let input: Locator | undefined;

  test.beforeEach(({ page }) => {
    button = page.locator('.todo-button');
    input = page.locator('#todo-input');
    if (button === undefined) {
      expect('button이 렌더링되지 않았다.').toBe(false);
      return;
    }
    if (input === undefined) {
      expect('input이 렌더링되지 않았다.').toBe(false);
      return;
    }
  });

  test('버튼을 눌렀을 때, 적혀 있던 input값이 초기화되어야 한다.', async ({
    page,
  }) => {
    if (!button || !input) return;

    await input.focus();
    await input.fill('test');

    await expect(button).toBeEnabled();

    await button.click();

    const inputValue = await input.inputValue();

    expect(inputValue).toBe('');
  });

  test('사용자가 input 값을 입력하지 않았다면 버튼이 비활성화된다.', async () => {
    if (!button || !input) return;

    const inputValue = await input.inputValue();

    if (inputValue) {
      await expect('inputValue가 초기에 값이 없어야 한다.').toBe(false);
      return;
    }

    await expect(button).toBeDisabled();
  });
});
