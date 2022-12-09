import TodosPage from '@/pages/TodosPage';
import { Suspense } from 'react';
import Loading from './loading';

export interface TodoInterface {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

async function getData(): Promise<TodoInterface[]> {
  const res = await fetch('https://dummyjson.com/todos');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const todosdata = getData();
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
