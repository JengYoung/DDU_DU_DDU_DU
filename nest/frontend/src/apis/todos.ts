import { ITodo } from '@/types/todo';
import axios from 'axios';
// import { request } from './index';

const baseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  timeout: 3000,
});

export const request = baseInstance;

export const getTodos = (token: string) => {
  const res = request.get<ITodo[]>('/todos', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
