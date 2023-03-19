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

export interface IDeleteTodo extends ITodosAPIReqeust {
  id: ITodo['id'];
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

export const deleteTodo = ({ id, token }: IDeleteTodo) => {
  const res = request.delete<ITodo[]>(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
