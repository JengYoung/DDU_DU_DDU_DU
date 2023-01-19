import { createHash } from 'crypto';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { useUserAuthContext } from '../../../context/UserAuth';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    async function getToken() {
      try {
        const cache = await caches.open('tokens');
        const tokenCache = await cache.match('/auth/user');

        if (!tokenCache) throw new Error();

        const { access_token } = await tokenCache.json();

        const qs = new URLSearchParams(window.location.search);

        const code = qs.get('code');

        const code_verifier = '1234';
        const sha256CodeChallenge = createHash('sha256').update(code_verifier).digest('hex');

        const res = await fetch(
          `/api/token?client_id=seeyouletter&code=${code}&code_verifier=${sha256CodeChallenge}&grant_type=authorization_code&redirect_uri=http://localhost:3000/silent`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (res.ok) {
          cache.put('user', res);
        }
      } catch (e) {
        console.error('request token is failed 😖');
      }
    }

    getToken();
    /* eslint-disable-next-line */
  }, []);

  return <div>Redirect</div>;
}
