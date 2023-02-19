import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useMemo, useReducer, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const inter = Inter({ subsets: ['latin'] });

interface ITodo {
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

type TInputValue = string;

interface WriteInputAction {
  type: 'write';
  payload: {
    content: TInputValue;
  };
}

interface InitializeInputAction {
  type: 'initialize';
}

type ITodosReducerAction =
  | CreateTodoAction
  | UpdateTodoCompleteAction
  | DeleteTodoAction;
type IInputReducerAction = WriteInputAction | InitializeInputAction;

const initialTodosState: ITodo[] = [];
const todosReducer = (state: ITodo[], action: ITodosReducerAction): ITodo[] => {
  switch (action.type) {
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
  const [todosState, dispatch] = useReducer(todosReducer, initialTodosState);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const value = inputRef.current.value;

    dispatch({
      type: 'create',
      payload: {
        title: value,
      },
    });

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

        <ul className="todo-list">12321</ul>
      </main>
    </>
  );
}
