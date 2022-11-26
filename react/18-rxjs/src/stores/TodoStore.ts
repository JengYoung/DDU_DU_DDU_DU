import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
  id: 0,
  todos: [],
};

const todoStoreState$ = new BehaviorSubject(initialState);

export const todoData$: Observable<InitialTodoStoreState> = todoStoreState$.asObservable();

export const addTodo = (content: string) => {
  todoStoreState$.next({
    ...initialState,
    id: initialState.id + 1,
    todos: [...initialState.todos, { content, id: initialState.id + 1, isDone: false }],
  });
};

export const deleteTodo = (id: number) => {
  todoStoreState$.next({
    ...initialState,
    todos: initialState.todos.filter((todo) => todo.id !== id),
  });
};

export const toggleTodo = (id: number, checked: boolean) => {
  todoStoreState$.next({
    ...initialState,
    todos: initialState.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ),
  });
};

export const completeData = () => todoStoreState$.complete();
