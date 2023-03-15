import { GetTodoByIdDTO } from './dto/getTodoById.dto';
import { TodosService } from './todos.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WriteTodoDTO } from './dto/writeTodo.dto';
import { DeleteTodoByIdDTO } from './dto/deleteTodoById.dto';
import { UpdateTodoDTO } from './dto/updateTodo.dto';
import { TodoValidationPipe } from './pipes/TodoValidation.pipe';
import { Todos } from './entities/todos.entity';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Get('/')
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  writeTodo(@Body() writeTodoDTO: WriteTodoDTO): Promise<Todos> {
    return this.todosService.writeTodo(writeTodoDTO);
  }

  @Get('/:id')
  getTodoById(@Param() getTodoByIdDTO: GetTodoByIdDTO): Promise<Todos> {
    return this.todosService.getTodoById(getTodoByIdDTO);
  }

  @Delete('/:id')
  deleteTodoById(@Param() deleteTodoByIdDTO: DeleteTodoByIdDTO): Promise<void> {
    return this.todosService.deleteTodoById(deleteTodoByIdDTO);
  }

  @Put('/')
  updateTodo(
    @Body() updateTodoDTO: UpdateTodoDTO,
    @Body('type', TodoValidationPipe) type: Todos['type'],
  ) {
    this.todosService.updateTodo(updateTodoDTO);
    return type;
  }
}
