import { Inter } from '@next/font/google';
import { useEffect, useRef } from 'react';
import { useUserAuthContext } from '../../context/UserAuth';
import { createHash } from 'crypto';
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

  const { user, setUser } = useUserAuthContext();
  const code_verifier = createHash('sha256').update(code_challenge).digest('hex');
  console.log(code_verifier);

  useEffect(() => {
    async function getToken() {
      try {
        const cache = await caches.open('tokens');
        const token = await cache.match('/auth/user');
        const data = await token?.json();

        if (!data) {
          throw new Error();
        }

        setUser(data);
      } catch (e) {
        await router.replace('/login');
      }
    }

    getToken();
    /* eslint-disable-next-line */
  }, []);

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
