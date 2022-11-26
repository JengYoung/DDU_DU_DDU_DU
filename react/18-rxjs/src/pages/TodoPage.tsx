import './page.scss';

import React, { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';
import List from '../components/List/Index';
import { InitialTodoStoreState, todoData$, TodoInterface } from '../stores/TodoStore';

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const todo$: Subscription = todoData$.subscribe((v: InitialTodoStoreState) => {
      setTodos(() => v.todos);
    });

    return () => todo$.unsubscribe();
  }, []);

  return (
    <section className="page">
      <List className="todo-list"></List>
    </section>
  );
};

export default TodoPage;
