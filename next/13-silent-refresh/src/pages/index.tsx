import { Inter } from '@next/font/google';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useUserAuthContext } from '../../context/UserAuth';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const client_id = 'seeyouletter';
  const redirect_uri = 'http://localhost:3000/silent';
  const scope = 'user.read%20openid';
  const code_challenge = '1234';
  const state = '1234';
  const nonce = 'abc';

  const { user, checked } = useUserAuthContext();

  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;

    setTodos((state) => [
      ...state,
      {
        id: uuidv4(),
        title: inputValue,
        completed: false,
      },
    ]);

    (inputRef.current as HTMLInputElement).value = '';
    setInputValue(() => '');
  };

  const onToggle = (id: string) => {
    setTodos((state) => state.map((v) => (v.id === id ? { ...v, completed: !v.completed } : v)));
  };

  useEffect(() => {
    if (checked && !user.access_token) {
      router.replace('/login');
    }
  }, [user, checked, router]);

  return (
    <main>
      <iframe
        style={{ display: 'none' }}
        ref={iframeRef}
        src={`/api/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&code_challenge=${code_challenge}&code_challenge_method=S256&state=${state}&nonce=${nonce}`}
      />

      <h2>TODOLIST 🙇🏻‍♂️</h2>

      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          placeholder="입력"
          onInput={(e) => setInputValue(() => (e.target as HTMLInputElement).value)}
        />
        <button type="submit">할 일 추가</button>
      </form>

      <ul>
        {todos.map((v) => (
          <li key={v.id}>
            <p
              style={{ textDecoration: v.completed ? 'line-through' : 'none' }}
              onClick={() => onToggle(v.id)}
            >
              {v.title}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
