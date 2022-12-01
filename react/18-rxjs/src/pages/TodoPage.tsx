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
  initTodo,
} from '../stores/TodoStore';
import Input from '../components/Input/Input';
import Button from '../components/Button/Index';
import TodoCard from '../components/Card/TodoCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useParams } from 'react-router-dom';

const TodoPage = () => {
  const { userId } = useParams();
  const { localStorage, getItem, setItem } = useLocalStorage();
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const todo$: Subscription = todoData$.subscribe((v: InitialTodoStoreState) => {
      setTodos(() => {
        if (localStorage) {
          setItem('rxjs-react-18-todo', v.todos);
        }
        return v.todos;
      });
    });

    initTodo(getItem('rxjs-react-18-todo', []));

    return () => todo$.unsubscribe();
  }, [localStorage]);

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!inputValue || !userId) return;

    addTodo(inputValue, userId);
    setInputValue(() => '');
  };

  const onToggle = (id: number) => {
    toggleTodo(id);
  };

  const onDelete = (id: number) => {
    deleteTodo(id);
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
              toggleTodo={onToggle}
              deleteTodo={onDelete}
            ></TodoCard>
          ))}
        </List>
      </div>
    </section>
  );
};

export default TodoPage;
