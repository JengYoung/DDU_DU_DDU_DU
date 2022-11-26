import styles from './page.module.scss';

import React, { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';
import List from '../components/List/Index';
import { InitialTodoStoreState, todoData$, TodoInterface } from '../stores/TodoStore';
import Input from '../components/Input/Input';

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const todo$: Subscription = todoData$.subscribe((v: InitialTodoStoreState) => {
      setTodos(() => v.todos);
    });

    return () => todo$.unsubscribe();
  }, []);

  return (
    <section className={styles.page}>
      <div className={styles['page__inner']}>
        <Input className="todo-input" />
        <List className="todo-list"></List>
      </div>
    </section>
  );
};

export default TodoPage;
