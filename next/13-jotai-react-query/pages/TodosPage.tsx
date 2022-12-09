'use client';

import { TodoInterface } from '@/app/todos/page';
import React, { useEffect } from 'react';

const TodosPage = ({ data }: { data: TodoInterface[] }) => {
  useEffect(() => {
    console.log('todosPage: ', data);
  }, [data]);
  return <main>todos</main>;
};

export default TodosPage;
