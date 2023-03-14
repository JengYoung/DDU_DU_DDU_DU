import { WriteTodoDTO } from './dto/writeTodo.dto';
import { ITodo } from './todos.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { GetTodoByIdDTO } from './dto/getTodoById.dto';
import { DeleteTodoByIdDTO } from './dto/deleteTodoById.dto';

@Injectable()
export class TodosService {
  private todos: ITodo[] = [];

  getTodos(): ITodo[] {
    return this.todos;
  }

  writeTodo(writeTodoDTO: WriteTodoDTO) {
    const now = new Date();

    const { content, type } = writeTodoDTO;

    const todo: ITodo = {
      id: uuidV4(),
      type,
      content,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };

    this.todos.push(todo);

    return todo;
  }

  getTodoById(getTodoByIdDTO: GetTodoByIdDTO) {
    return this.todos.find(({ id: tId }) => tId === getTodoByIdDTO.id);
  }

  deleteTodoById(deleteTodoByIdDTO: DeleteTodoByIdDTO) {
    this.todos = this.todos.filter(
      ({ id: tId }) => deleteTodoByIdDTO.id !== tId,
    );

    return;
  }
}
