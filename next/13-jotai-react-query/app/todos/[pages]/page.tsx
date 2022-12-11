import TodoPage from '@/pages/TodoPage';
import { TodoAPIDataInterface, TodoInterface } from '@/types/todo';
import { Suspense } from 'react';
import Loading from './loading';

export interface ITodoPageParams {
  pages: string;
}

async function getData(params: ITodoPageParams): Promise<TodoInterface> {
  const url = `https://dummyjson.com/todos/${params.pages}`;
  const res = await fetch(url, { cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: ITodoPageParams }) {
  const todosdata = getData(params);

  const result = await Promise.all([
    todosdata,
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(undefined);
      }, 500)
    ),
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <TodoPage serverData={result[0]} params={params}></TodoPage>
    </Suspense>
  );
}
