'use client';

import Button from '@/components/Button';
import ErrorPage from '@/pages/ErrorPage';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  const onErrorButtonClick = () => {
    reset();
    router.push('/');
  };

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorPage>
      <Button onClick={onErrorButtonClick}>홈으로</Button>
    </ErrorPage>
  );
}
