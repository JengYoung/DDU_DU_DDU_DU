import { ITodo } from '../todos.model';
export class UpdateTodoDTO {
  id: ITodo['id'];
  type?: ITodo['type'];
  content?: ITodo['content'];
  completed?: ITodo['completed'];
  createdAt?: ITodo['createdAt'];
  updatedAt?: ITodo['updatedAt'];
}
