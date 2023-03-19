import { DefaultErrorBoundary } from '@/components/ErrorBoundary/Default';
import SSRSafeSuspense from '@/components/ErrorBoundary/SSRSuspense';
import TodoForm from '@/components/Todo/TodoForm';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import React, { PropsWithChildren, Suspense, useEffect, useState } from 'react';

const LazyTodoList = React.lazy(() => import('../../components/Todo/TodoList'));

export default function TodosPage() {
  const [token, setToken] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);
  const reactQuery = useQueryErrorResetBoundary();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return;
    }
    setToken(() => JSON.parse(token));

    return () => {
      setToken(() => null);
    };
  }, [refresh]);

  return (
    <div>
      <Suspense fallback={<div>서버에 보내는 중입니다...</div>}>
        {token && <TodoForm token={token} />}
      </Suspense>

      <DefaultErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => {
          return <Fallback reset={resetErrorBoundary}>{error.message}</Fallback>;
        }}
        onReset={() => {
          reactQuery.reset();
          setRefresh((state) => !state);
        }}
        resetKeys={[refresh]}
      >
        <SSRSafeSuspense fallback={<div>불러오고 있어요!</div>}>
          <LazyTodoList token={token} />
        </SSRSafeSuspense>
      </DefaultErrorBoundary>
    </div>
  );
}

interface IFallbackProps extends PropsWithChildren {
  reset: () => void;
}
function Fallback({ reset, children }: IFallbackProps) {
  return (
    <div>
      불러오는 데 에러가 발생했어요. 😭
      <button onClick={reset}>다쉬하실?</button>
      <div>{children}</div>
    </div>
  );
}

function Loading() {
  return <div>Loading...</div>;
}
