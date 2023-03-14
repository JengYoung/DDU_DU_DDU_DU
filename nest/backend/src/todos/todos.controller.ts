import { TodosService } from './todos.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ITodo, IWriteTodo } from './todos.model';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get('/')
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post('/')
  writeTodo(
    @Body('content') content: IWriteTodo['content'],
    @Body('type') type: IWriteTodo['type'],
  ): ITodo {
    return this.todosService.writeTodo({ type, content });
  }
}
