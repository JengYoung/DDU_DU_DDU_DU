import React, { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';
import { InitialTodoStoreState, todoData$, TodoInterface } from '../stores/TodoStore';

const TodoPage = () => {
  const [todos, setTodos] = useState<InitialTodoStoreState>();

  useEffect(() => {
    const todo$: Subscription = todoData$.subscribe((v: InitialTodoStoreState) => {
      setTodos(() => v);
    });

    return () => todo$.unsubscribe();
  }, []);

  return <div>TodoPage</div>;
};

export default TodoPage;
