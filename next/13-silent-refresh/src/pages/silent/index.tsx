import React, { useEffect } from 'react';

export default function SilentPage() {
  useEffect(() => {
    async function getToken() {
      console.log(window.location);
      const qs = new URLSearchParams(window.location.search);

      const code = qs.get('code');
      const state = qs.get('state');
      console.log(qs.get('code'), qs.get('state'));
      const code_verifier = '1234';
      const res = await fetch(
        `/api/token?client_id=seeyouletter&code=${code}&code_verifier=${code_verifier}&grant_type=authorization_code&redirect_uri=http://localhost:3000/silent`
      );

      if (res.ok) {
        console.log(await res.json());
      }
    }
    getToken();
  });
  return <div>SilentPage</div>;
}
