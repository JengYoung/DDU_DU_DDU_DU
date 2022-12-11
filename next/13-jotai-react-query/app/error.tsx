'use client';

import ErrorPage from '@/pages/ErrorPage';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorPage>
      <button
        onClick={() => {
          reset();
          router.push('/');
        }}
      >
        홈으로 돌아갈게요.
      </button>
    </ErrorPage>
  );
}
