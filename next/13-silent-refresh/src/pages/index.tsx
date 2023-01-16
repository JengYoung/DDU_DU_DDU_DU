import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const client_id = 'seeyouletter';
  const redirect_uri = 'http://localhost:3000/silent';
  const scope = 'user.read%20openid';
  const code_challenge = '1234';
  const state = '1234';
  const nonce = 'abc';

  console.log('rendering');

  const onAuthorizeButtonClick = async () => {
    try {
      const res = await fetch(
        `/api/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&code_challenge=${code_challenge}&code_challenge_method=S256&state=${state}&nonce=${nonce}`
      );
      console.log(res);
    } catch (e) {
      console.error('ButtonClickError: ', e);
    }
  };

  useEffect(() => {
    if (!window) return;
    if (iframeRef.current === null) return;
  }, [iframeRef]);

  return (
    <main>
      <iframe
        ref={iframeRef}
        src={`http://localhost:3000/api/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&code_challenge=${code_challenge}&code_challenge_method=S256&state=${state}&nonce=${nonce}`}
      />
      <h2>로그인해주세요 🙇🏻‍♂️</h2>
      <button onClick={onAuthorizeButtonClick}>로그인하기</button>
    </main>
  );
}
