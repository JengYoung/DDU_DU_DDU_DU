'use client';

import Card from '@/components/Card/Card';
import ErrorBoundary from '@/components/ErrorBoundary';
import { flexWrap, fullWidth, pxMargin } from '@/styles/css/structures';
import { HStack } from '@/styles/styled';
import { TodoAPIDataInterface, TodoInterface } from '@/types/todo';
import { useRouter } from 'next/navigation';
import React, { Suspense } from 'react';
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
const TodosPage = ({ serverData }: { serverData: TodoAPIDataInterface }) => {
  const todosQuery = useQuery<TodoAPIDataInterface, Error>(
    'todosData',
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(undefined);
        }, 1000);
      }).then(() => {
        return fetch('https://dummyjson.com/todos')
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
      refetchOnMount: false,
      staleTime: 1000000,
      cacheTime: 10000000,
    }
  );

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
        {todosQuery.status === 'success' && (
          <HStack css={flexWrap}>
            {todosQuery.data.todos?.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </HStack>
        )}
      </ErrorBoundary>
    </Suspense>
  );
};

export default TodosPage;
