import { IUser } from './auth';

interface ITodoUser extends IUser {
  id: string;
  email: string;
  todos: ITodo[];
}

export enum ETodoType {
  'private' = 'PRIVATE',
  'public' = 'PUBLIC',
}

export interface ITodo {
  type: ETodoType;
  id: string;
  todoId: string;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: ITodoUser;
}
