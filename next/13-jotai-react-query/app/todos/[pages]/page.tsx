import TodosPage from '@/pages/TodosPage';
import { TodoAPIDataInterface } from '@/types/todo';
import { Suspense } from 'react';
import Loading from './loading';

interface IParams {
  pages: string;
}

async function getData(params: IParams): Promise<TodoAPIDataInterface> {
  const paramsNum = +params.pages;
  const listCount = paramsNum * 30;

  const url =
    'https://dummyjson.com/todos' +
    (paramsNum
      ? '?' +
        new URLSearchParams({
          skip: `${listCount}`,
          limit: '30',
        })
      : '');
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

export default async function Page({ params }: { params: IParams }) {
  const todosdata = getData(params);

  const result = await Promise.all([
    todosdata,
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(undefined);
      }, 1000)
    ),
  ]);

  return (
    <Suspense fallback={Loading()}>
      <TodosPage data={result[0]}></TodosPage>
    </Suspense>
  );
}
