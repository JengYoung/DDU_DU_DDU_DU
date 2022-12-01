import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface TodoInterface {
  id: number;
  content: string;
  isDone: boolean;
}

export interface InitialTodoStoreState {
  id: number;
  todos: TodoInterface[];
}

const initialState: InitialTodoStoreState = {
  id: new Date().getTime() + 0,
  todos: [],
};

const todoStoreState$ = new BehaviorSubject(initialState);

export const todoData$: Observable<InitialTodoStoreState> = todoStoreState$.asObservable();

export const initTodo = (todos: TodoInterface[]) => {
  todoStoreState$.next({
    id: new Date().getTime() + todoStoreState$.value.id + 1,
    todos,
  });
};

export const addTodo = (content: string) => {
  todoStoreState$.next({
    id: new Date().getTime() + todoStoreState$.value.id + 1,
    todos: [
      ...todoStoreState$.value.todos,
      { content, id: todoStoreState$.value.id + 1, isDone: false },
    ],
  });
};

export type deleteTodoType = (id: number) => void;
export const deleteTodo: deleteTodoType = (id) => {
  todoStoreState$.next({
    ...todoStoreState$.value,
    todos: todoStoreState$.value.todos.filter((todo) => todo.id !== id),
  });
};

export type toggleTodoType = (id: number) => void;
export const toggleTodo: toggleTodoType = (id: number) => {
  todoStoreState$.next({
    ...todoStoreState$.value,
    todos: todoStoreState$.value.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ),
  });
};

export const completeData = () => todoStoreState$.complete();
