import { ITodo } from '@/pages';
import { test, expect, Locator, type Page } from '@playwright/test';

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

  test.describe('todo-list', () => {
    let input: Locator | undefined;
    let button: Locator | undefined;
    let todoList: Locator | undefined;

    test.beforeEach(async ({ page }) => {
      input = page.locator('#todo-input');
      button = page.locator('.todo-button');
      todoList = page.locator('.todo-list');

      await expect(input).toBeDefined();
      await expect(button).toBeDefined();
      await expect(todoList).toBeDefined();
    });

    test.afterAll(async ({ page }) => {
      await setInitialTodo(page);
    });

    test.describe('초기에 할 일이 없다면', () => {
      let todos: undefined | ITodo[] | null;

      test.beforeEach(async ({ page }) => {
        todos = await getTodo(page);

        if (!todos?.length) {
          await setInitialTodo(page);
          todos = await getTodo(page);
        }

        await expect(todos?.length).toBe(0);
      });

      test('"할 일이 없어요! 🙆🏻"라는 문구가 나와야 한다.', async ({ page }) => {
        if (!todoList) {
          expect('TodoList가 없습니다.').toBe(false);
          return;
        }

        const emptyContent = todoList.getByText('할 일이 없어요! 🙆🏻');
        await expect(emptyContent).toBeDefined();
      });
    });

    test.describe('초기에 할 일이 있다면', () => {
      // let todos: undefined | ITodo[] | null;

      test.beforeEach(async ({ page }) => {
        await page.evaluate(`window.localStorage.setItem('todos', JSON.stringify([
          {
            id: '할일1',
            title: '할일 1',
            completed: false,
          },
          {
            id: '할일2',
            title: '할일 2',
            completed: false,
          },
          {
            id: '할일3',
            title: '할일 3',
            completed: false,
          }
        ]))`);

        // await page.waitForSelector('.todo-item', { state: 'visible' })

        const todos = await getTodo(page);

        await expect(todos?.length).toBe(3);
      });

      test('"할 일이 없다는 문구가 나오지 않아야 한다."', async ({ page }) => {
        if (!todoList) {
          expect('TodoList가 없습니다.').toBe(false);
          return;
        }

        const emptyContent = todoList.getByText('할 일이 없어요! 🙆🏻');
        await expect(emptyContent).not.toBeVisible();
      });

      test('할 일들이 나와야 한다.', async ({ page }) => {
        const todos = await getTodo(page);
        expect(todos.length).toBe(3);

        if (!todoList) {
          throw new Error('todoList가 없습니다.');
        }

        if (todos === null || todos === undefined) {
          throw new Error('todos가 없습니다.');
        }

        const todoItem = page.locator('.todo-item');
        const todoItemCount = await todoItem.count();

        await expect(todoItemCount).toEqual(3);
      });
    });
  });
});

async function getTodo(page: Page) {
  return await page.evaluate(() => {
    const todos = window.localStorage.getItem('todos');

    return todos ? JSON.parse(todos) : todos;
  });
}

async function setTodo(page: Page, item: ITodo) {
  return await page.evaluate((e) => {
    const value = window.localStorage.getItem('todos');
    const todos = value ? JSON.parse(value) : [];
    window.localStorage.setItem('todos', JSON.stringify([...todos, e]));
  }, item);
}

async function setInitialTodo(page: Page) {
  return await page.evaluate(() => {
    window.localStorage.setItem('todos', JSON.stringify([]));
  });
}

// async function checkTodoMounted(page: Page) {
//   return await page.evaluate(() => {
//     const todos = window.localStorage.getItem('todos');
//     if (!todos) {
//       todos
//     }
//   });
// }
