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

  test('입력 후 페이지를 껐다가 들어와도 할 일들이 유지되어야 한다.', async ({
    context,
  }) => {
    const nowPage = await context.newPage();
    await nowPage.goto('http://localhost:3000');

    await addTodoScenario(nowPage, '할일 1');
    await addTodoScenario(nowPage, '할일 2');
    await addTodoScenario(nowPage, '할일 3');

    await nowPage.close();

    const nextPage = await context.newPage();
    await nextPage.goto('http://localhost:3000');

    const nextPageTodoItems = await nextPage
      .locator('.todo-item > p')
      .allTextContents();
    expect(
      nextPageTodoItems.every((text) =>
        ['할일 1', '할일 2', '할일 3'].includes(text)
      )
    ).toBeTruthy();
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

  test('버튼을 눌러 할 일을 추가했다면, 할 일이 todo-list에서 보여야 한다.', async ({
    page,
  }) => {
    if (!button || !input) return;

    await input.focus();
    await input.fill('test');

    await button.click();

    const todoItemTextContent = await page.locator('.todo-item > p');

    await expect(todoItemTextContent).toHaveText('test');
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
      test.beforeEach(async ({ page }) => {
        await addTodoScenario(page, '할일 1');
        await addTodoScenario(page, '할일 2');
        await addTodoScenario(page, '할일 3');
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
        if (!todoList) {
          throw new Error('todoList가 없습니다.');
        }

        const todoItem = await page.locator('.todo-item');
        const todoItemCount = await todoItem.count();
        await expect(todoItemCount).toEqual(3);
      });

      test.describe('todo-item', () => {
        test('todo-item의 내용을 클릭하면 완료한 것처럼 내용에 줄이 그어져야 한다.', async () => {
          if (!todoList) {
            expect('todoList가 없습니다.').toBe(false);
            return;
          }

          const todoItem2 = await todoList.locator('.todo-item', {
            hasText: '할일 2',
          });
          await todoItem2.click();

          await expect(todoItem2).toHaveCSS(
            'text-decoration-line',
            'line-through'
          );
        });

        test('todo-item의 내용을 2번 클릭하면 원래대로 돌아와야 한다.', async () => {
          if (!todoList) {
            expect('todoList가 없습니다.').toBe(false);
            return;
          }

          const todoItem2 = await todoList.locator('.todo-item', {
            hasText: '할일 2',
          });
          await todoItem2.click();
          await todoItem2.click();

          await expect(todoItem2).toHaveCSS('text-decoration-line', 'none');
        });
      });

      test.describe('todo__delete-button', () => {
        test('각 할 일들에는 삭제 버튼이 있어야 한다.', async () => {
          if (!todoList) {
            expect('todoList가 없습니다.').toBe(false);
            return;
          }

          const todoDeleteBtns = await todoList
            .locator('.todo-item > .todo__delete-button')
            .all();
          await expect(todoDeleteBtns.length).toBe(3);
        });
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

async function setInitialTodo(page: Page) {
  return await page.evaluate(() => {
    window.localStorage.setItem('todos', JSON.stringify([]));
  });
}
async function addTodoScenario(page: Page, todo: ITodo['title']) {
  const input = page.locator('#todo-input');

  // Create 1st todo.
  await input.fill(todo);
  await input.press('Enter');
}
