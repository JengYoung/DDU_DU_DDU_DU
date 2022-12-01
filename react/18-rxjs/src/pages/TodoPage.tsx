import styles from './page.module.scss';

import React, { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';
import List from '../components/List/Index';
import {
  addTodo,
  toggleTodo,
  InitialTodoStoreState,
  todoData$,
  TodoInterface,
  deleteTodo,
} from '../stores/TodoStore';
import Input from '../components/Input/Input';
import Button from '../components/Button/Index';
import TodoCard from '../components/Card/TodoCard';

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const todo$: Subscription = todoData$.subscribe((v: InitialTodoStoreState) => {
      setTodos(() => v.todos);
    });

    return () => todo$.unsubscribe();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!inputValue) return;

    addTodo(inputValue);
    setInputValue(() => '');
  };

  return (
    <section className={styles.page}>
      <div className={styles['page__inner']}>
        <form className={styles['todo-form']}>
          <Input
            value={inputValue}
            className="todo-search__input todo-input"
            onInput={(e: React.FormEvent) => setInputValue((e.target as HTMLInputElement).value)}
          />

          <Button className={styles['todo-form__form-button']} onClick={onSubmit}>
            할 일 추가
          </Button>
        </form>
        <List className="todo-list">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            ></TodoCard>
          ))}
        </List>
      </div>
    </section>
  );
};

export default TodoPage;
