import React, { useContext, useEffect } from 'react';
import { UserAuthContext } from '../context/UserAuth';

export default function SilentPage() {
  const { setUser } = useContext(UserAuthContext);

  useEffect(() => {
    async function getToken() {
      const qs = new URLSearchParams(window.location.search);

      const code = qs.get('code');

      const code_verifier = '1234';

      const res = await fetch(
        `/api/token?client_id=seeyouletter&code=${code}&code_verifier=${code_verifier}&grant_type=authorization_code&redirect_uri=http://localhost:3000/silent`
      );

      if (res.ok) {
        const data = await res.json();
        setUser(() => data);
      }
    }
    getToken();
  });
  return <div>SilentPage</div>;
}
