import { ITodo, IWriteTodo } from './todos.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class TodosService {
  private todos: ITodo[] = [];

  getTodos(): ITodo[] {
    return this.todos;
  }

  writeTodo(payload: IWriteTodo) {
    const now = new Date();

    const todo: ITodo = {
      id: uuidV4(),
      type: payload.type,
      content: payload.content,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };

    this.todos.push(todo);

    return todo;
  }
}
