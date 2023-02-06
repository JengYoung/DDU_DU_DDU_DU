import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { MouseEvent, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ITodo {
  id: string;
  content: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const onClickButton = (e: MouseEvent) => {
    e.preventDefault();
    setTodos((state) => [
      ...state,
      {
        id: uuidv4(),
        content: inputValue,
        completed: false,
      },
    ]);

    setInputValue(() => '');
  };

  console.log(todos);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles['todo-page']}>
        <form className={styles.form}>
          <label htmlFor="input" className={styles.label}>
            <div className={styles['todo__title']}>할 일 입력하기</div>
            <input
              type="text"
              className={styles['todo__input']}
              id="input"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </label>

          <button type="submit" className={styles['todo__button']} onClick={onClickButton}>
            CLICK
          </button>
        </form>

        <ul className={styles['todo-list']}>
          {todos.map((todo) => (
            <li className={styles['todo-list__item']} key={todo.id}>
              {todo.content}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
