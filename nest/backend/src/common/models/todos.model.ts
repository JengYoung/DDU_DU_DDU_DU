export interface ITodo {
  id: number;
  todoId: string;
  type: ETodoTypes;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum ETodoTypes {
  public = 'PUBLIC',
  private = 'PRIVATE',
}
