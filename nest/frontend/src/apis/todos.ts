import { ITodo } from '@/types/todo';
import axios from 'axios';
import { request } from './index';

export enum ETodos {
  'private' = 'PRIVATE',
  'public' = 'PUBLIC',
}
export interface ITodosAPIReqeust {
  token: string;
}
export interface IWriteTodo extends ITodosAPIReqeust {
  type: ETodos;
  content: string;
}

export const getTodos = ({ token }: ITodosAPIReqeust) => {
  const res = request.get<ITodo[]>('/todos', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const writeTodo = ({ type, content, token }: IWriteTodo) => {
  const res = request.post<ITodo[]>(
    '/todos',
    {
      type,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
};
