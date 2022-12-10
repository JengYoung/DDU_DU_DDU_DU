'use client';

import ErrorPage from '@/pages/ErrorPage';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  // const theme = useTheme();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorPage />;
}
