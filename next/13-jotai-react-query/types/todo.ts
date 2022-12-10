export interface TodoAPIDataInterface {
  todos: TodoInterface[];
  total: number;
  skip: number;
  limit: number;
}

export interface TodoInterface {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
