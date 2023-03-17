import { ITodo } from '@/types/todo';
import { request } from './index';

export const getTodos = (token: string) => {
  const res = request.get<ITodo[]>('/todos', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
