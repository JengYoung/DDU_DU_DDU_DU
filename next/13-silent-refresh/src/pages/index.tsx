import { Inter } from '@next/font/google';
import { useEffect, useRef } from 'react';
import { useUserAuthContext } from '../../context/UserAuth';
import { createHash } from 'crypto';

export default function Home() {
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

  // useEffect(() => {
  //   const handleUserAuth = (e: CustomEventInit) => {
  //     if (e.detail) {
  //       setUser(() => e.detail.data);
  //     }
  //   };

  //   iframeRef.current?.contentWindow?.addEventListener('USER_AUTH', handleUserAuth);

  //   return () => {
  //     if (iframeRef.current?.contentWindow) {
  //       /* eslint-disable-next-line react-hooks/exhaustive-deps */
  //       iframeRef.current.contentWindow.removeEventListener('USER_AUTH', handleUserAuth);
  //     }
  //   };
  //   /* eslint-disable-next-line react-hooks/exhaustive-deps */
  // }, []);

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
