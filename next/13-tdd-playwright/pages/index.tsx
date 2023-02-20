import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useEffect, useMemo, useReducer, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

interface CreateTodoAction {
  type: 'create';
  payload: {
    title: ITodo['title'];
  };
}

interface UpdateTodoCompleteAction {
  type: 'update';
  payload: {
    id: ITodo['id'];
    completed: ITodo['completed'];
  };
}

interface DeleteTodoAction {
  type: 'delete';
  payload: {
    id: ITodo['id'];
  };
}

interface InitializeTodoAction {
  type: 'initialize';
}

type TInputValue = string;

interface WriteInputAction {
  type: 'write';
  payload: {
    content: TInputValue;
  };
}

interface CompleteTodoAction {
  type: 'complete';
  payload: {
    id: ITodo['id'];
  };
}

interface NotCompleteTodoAction {
  type: 'notComplete';
  payload: {
    id: ITodo['id'];
  };
}

interface InitializeInputAction {
  type: 'initialize';
}

type ITodosReducerAction =
  | CreateTodoAction
  | UpdateTodoCompleteAction
  | DeleteTodoAction
  | InitializeTodoAction
  | CompleteTodoAction
  | NotCompleteTodoAction;

type IInputReducerAction = WriteInputAction | InitializeInputAction;

const initialTodosState: ITodo[] = [];
const todosReducer = (state: ITodo[], action: ITodosReducerAction): ITodo[] => {
  switch (action.type) {
    case 'initialize': {
      const value = window.localStorage.getItem('todos');

      if (!value) {
        window.localStorage.setItem('todos', JSON.stringify([]));
      }

      const todos = value ? JSON.parse(value) : [];

      return todos;
    }

    case 'create': {
      const { title } = (action as CreateTodoAction).payload;

      return [
        ...state,
        {
          id: uuidv4(),
          title,
          completed: false,
        },
      ];
    }

    case 'update': {
      const { id, completed } = (action as UpdateTodoCompleteAction).payload;

      return state.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      );
    }

    case 'delete': {
      const { id } = (action as DeleteTodoAction).payload;

      return state.filter((todo) => todo.id !== id);
    }

    default: {
      return state;
    }

    case 'complete': {
      const { id } = (action as CompleteTodoAction).payload;

      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
    }

    case 'notComplete': {
      const { id } = (action as NotCompleteTodoAction).payload;

      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      );
    }
  }
};

const initialInputState: string = '';
const inputReducer = (
  state: TInputValue,
  action: IInputReducerAction
): TInputValue => {
  switch (action.type) {
    case 'write': {
      return action.payload.content;
    }

    case 'initialize': {
      return '';
    }

    default: {
      return state;
    }
  }
};

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputState, dispatchInput] = useReducer(
    inputReducer,
    initialInputState
  );
  const [todosState, dispatchTodo] = useReducer(
    todosReducer,
    initialTodosState
  );

  useEffect(() => {
    dispatchTodo({
      type: 'initialize',
    });
  }, []);

  useEffect(() => {
    if (todosState.length) {
      window.localStorage.setItem('todos', JSON.stringify(todosState));
    }
  }, [todosState]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const value = inputRef.current.value;

    dispatchTodo({
      type: 'create',
      payload: {
        title: value,
      },
    });

    // localStorage.setItem('todos', JSON.stringify(todosState))

    dispatchInput({
      type: 'initialize',
    });

    inputRef.current.value = '';
  };

  const onChangeInput = (e: React.FormEvent) => {
    dispatchInput({
      type: 'write',
      payload: {
        content: (e.target as HTMLInputElement).value,
      },
    });
  };

  const onClickTodoItem = (
    e: React.MouseEvent,
    id: ITodo['id'],
    nowCompleted: boolean
  ) => {
    dispatchTodo({
      type: nowCompleted ? 'notComplete' : 'complete',
      payload: {
        id,
      },
    });
  };

  const onClickDeleteButton = (e: React.MouseEvent, id: ITodo['id']) => {
    dispatchTodo({
      type: 'delete',
      payload: {
        id,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Todo List</title>
      </Head>

      <main className="todo-page">
        <form id="todo-form" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            id="todo-input"
            className="todo-form__input "
            placeholder="할 일을 입력하세요!"
            onChange={onChangeInput}
          />
          <button
            className="todo-button"
            type="submit"
            onClick={onSubmit}
            disabled={!inputState}
          >
            추가하기
          </button>
        </form>

        <ul className="todo-list">
          {todosState.length ? (
            todosState.map((todo) => (
              <li
                key={todo.id}
                id={todo.id}
                className={`todo-item ${styles['todo-item']} ${
                  todo.completed ? styles.completed : ''
                }`}
                onClick={(e) => onClickTodoItem(e, todo.id, todo.completed)}
              >
                <p>{todo.title}</p>
                <button
                  className="todo__delete-button"
                  onClick={(e) => onClickDeleteButton(e, todo.id)}
                >
                  ❌
                </button>
              </li>
            ))
          ) : (
            <p>할 일이 없어요! 🙇🏻‍♂️</p>
          )}
        </ul>
      </main>
    </>
  );
}
