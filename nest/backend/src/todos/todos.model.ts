export interface ITodo {
  id: string;
  type: ETodo;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IWriteTodo {
  type: ITodo['type'];
  content: ITodo['content'];
}

export enum ETodo {
  public = 'PUBLIC',
  private = 'PRIVATE',
}
