'use client';

import { ITodoPageParams } from '@/app/todos/[pages]/page';
import Card from '@/components/Card/Card';
import ErrorBoundary from '@/components/ErrorBoundary';
import { flexWrap, fullWidth, pxMargin } from '@/styles/css/structures';
import { HStack } from '@/styles/styled';
import { TodoAPIDataInterface, TodoInterface } from '@/types/todo';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { css } from 'styled-components';
import Loading from './LoadingPage';
import { ReactQueryDevtools } from 'react-query/devtools';

const Structures = {
  todoCard: css`
    width: calc(25% - 20px);
    height: 120px;
  `,
};
const TodoCard = ({ todo }: { todo: TodoInterface }) => {
  const router = useRouter();

  const onClick = (id: number) => {
    router.push(`/todos/${id}`);
  };

  return (
    <div css={[pxMargin(10), fullWidth, Structures.todoCard]}>
      <Card todo={todo} onClick={() => onClick(todo.id)} />
    </div>
  );
};

const TodoPage = ({
  serverData,
  params,
}: {
  serverData: TodoInterface;
  params: ITodoPageParams;
}) => {
  const todoQuery = useQuery<TodoInterface, Error>(
    ['todo', params.pages],
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(undefined);
        }, 1000);
      }).then(() => {
        return fetch(`https://dummyjson.com/todos/${params.pages}`)
          .then((res) => res.json())
          .catch((e) => {
            throw new Error(e);
          });
      });
    },
    {
      initialData: serverData,
      suspense: true,
      refetchOnWindowFocus: false,
      staleTime: 600 * 1000,
      cacheTime: 600 * 1000,
    }
  );

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
        {todoQuery.status === 'success' && (
          <TodoCard key={todoQuery.data.id} todo={todoQuery.data} />
        )}
      </ErrorBoundary>
    </Suspense>
  );
};

export default TodoPage;
