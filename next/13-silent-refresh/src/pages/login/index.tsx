import { useContext, useEffect, useRef, useState, FormEvent } from 'react';

import { UserAuthContext } from '../context/UserAuth';
import { useRouter } from 'next/router';

export default function Home() {
  const { setUser } = useContext(UserAuthContext);
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const onAuthorizeButtonClick = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify({
          id,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error('Login API request failed');
      }

      const data = await res.json();
      setUser(() => data);

      await router.push('/');
    } catch (e) {
      console.error('ButtonClickError: ', e);
    }
  };

  useEffect(() => {
    if (!window) return;
    if (iframeRef.current === null) return;
  }, []);

  return (
    <main>
      <h2>로그인해주세요 🙇🏻‍♂️</h2>

      <form onSubmit={onAuthorizeButtonClick}>
        <label htmlFor="id">아이디</label>
        <input
          id="id"
          value={id}
          onInput={(e) => setId(() => (e.target as HTMLInputElement).value)}
        />

        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          value={password}
          onInput={(e) => setPassword(() => (e.target as HTMLInputElement).value)}
        />

        <button type="submit">로그인하기</button>
      </form>
    </main>
  );
}
