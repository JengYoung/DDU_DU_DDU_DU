import { GetTodoByIdDTO } from './dto/getTodoById.dto';
import { TodosService } from './todos.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ITodo } from './todos.model';
import { WriteTodoDTO } from './dto/writeTodo.dto';
import { DeleteTodoByIdDTO } from './dto/deleteTodoById.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get('/')
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post('/')
  writeTodo(@Body() writeTodoDTO: WriteTodoDTO): ITodo {
    return this.todosService.writeTodo(writeTodoDTO);
  }

  @Get('/:id')
  getTodoById(@Param() getTodoByIdDTO: GetTodoByIdDTO): ITodo {
    console.log('id: ', getTodoByIdDTO);
    return this.todosService.getTodoById(getTodoByIdDTO);
  }

  @Delete('/:id')
  deleteTodoById(@Param() deleteTodoByIdDTO: DeleteTodoByIdDTO): void {
    this.todosService.deleteTodoById(deleteTodoByIdDTO);
  }
}
