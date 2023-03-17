import { getTodos } from '@/apis/todos';
import { DefaultErrorBoundary } from '@/components/ErrorBoundary/Default';
import SSRSafeSuspense from '@/components/ErrorBoundary/SSRSuspense';
import { useQuery } from '@tanstack/react-query';
import React, { Suspense, useCallback, useEffect, useState } from 'react';

export default function Todos() {
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return;
    }
    setToken(() => JSON.parse(token));
  }, []);

  const queryKey = [token];

  const fetchData = () => {
    if (!token) return;
    const res = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    })
      .then(() => {
        return getTodos(token);
      })
      .then((res) => res.data);

    return res;
  };

  const todosAPI = useQuery(queryKey, fetchData, {
    suspense: true,
    staleTime: 600 * 1000,
    cacheTime: 600 * 1000,
    enabled: !!token,
  });

  return (
    <DefaultErrorBoundary renderFallback={(error, reset) => <div>{error.message}</div>}>
      <SSRSafeSuspense fallback={<div>불러오고 있어요!</div>}>
        <div>
          {todosAPI.data &&
            todosAPI.data.map((todo) => <div key={todo.todoId}>{todo.content}</div>)}
        </div>
      </SSRSafeSuspense>
    </DefaultErrorBoundary>
  );
}
