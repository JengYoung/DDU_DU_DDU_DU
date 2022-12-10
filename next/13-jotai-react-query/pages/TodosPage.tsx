'use client';

import { TodoAPIDataInterface } from '@/types/todo';
import React, { useEffect, useState } from 'react';

const TodosPage = ({ data }: { data: TodoAPIDataInterface }) => {
  const [todosData, setTodosData] = useState(data.todos);
  useEffect(() => {
    console.log('todosPage: ', todosData);
  }, [todosData]);

  return <main>todos</main>;
};

export default TodosPage;
