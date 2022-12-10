'use client';

import ErrorBoundary from '@/components/ErrorBoundary';
import { TodoAPIDataInterface } from '@/types/todo';
import React, { Suspense, useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from './LoadingPage';

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
    }
  );

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        {todosQuery.status === 'success' && (
          <section>
            {todosQuery.data.todos?.map((todo) => (
              <div key={todo.id}>{todo.todo}</div>
            ))}
          </section>
        )}
      </ErrorBoundary>
    </Suspense>
  );
};

export default TodosPage;
