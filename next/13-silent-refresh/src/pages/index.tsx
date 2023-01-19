import { Inter } from '@next/font/google';
import { useEffect, useRef } from 'react';
import { useUserAuthContext } from '../../context/UserAuth';
import { useRouter } from 'next/router';

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
    </main>
  );
}
