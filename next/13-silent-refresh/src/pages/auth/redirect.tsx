import React, { useContext, useEffect } from 'react';
import { useUserAuthContext } from '../../../context/UserAuth';

export default function RedirectPage() {
  useEffect(() => {
    async function getToken() {
      const qs = new URLSearchParams(window.location.search);

      const code = qs.get('code');

      const code_verifier = '1234';

      const res = await fetch(
        `/api/token?client_id=seeyouletter&code=${code}&code_verifier=${code_verifier}&grant_type=authorization_code&redirect_uri=http://localhost:3000/silent`
      );

      if (res.ok) {
        const cache = await caches.open('tokens');
        cache.put('user', res);
        // const data = await res.json();
        // const customEvent = new CustomEvent('USER_AUTH', { detail: { data } });
        // window.dispatchEvent(customEvent);
      }
    }

    getToken();
    /* eslint-disable-next-line */
  }, []);

  return <div>Redirect</div>;
}
