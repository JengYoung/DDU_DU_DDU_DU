export interface ITodo {
  id: string;
  type: ETodos;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IWriteTodo {
  type: ITodo['type'];
  content: ITodo['content'];
}

export enum ETodos {
  public = 'PUBLIC',
  private = 'PRIVATE',
}
