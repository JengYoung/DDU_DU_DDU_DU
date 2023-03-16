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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WriteTodoDTO } from './dto/writeTodo.dto';
import { DeleteTodoByIdDTO } from './dto/deleteTodoById.dto';
import { UpdateTodoDTO } from './dto/updateTodo.dto';
import { TodoValidationPipe } from './pipes/TodoValidation.pipe';
import { Todos } from './entities/todos.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Auth } from '../auth/entities/auth.entity';
import { GetTodosByEmailDTO } from './dto/getTodosByEmail.dto';
@Controller('todos')
@UseGuards(AuthGuard())
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Get('/')
  getTodos() {
    return this.todosService.getTodos();
  }

  @Get('/:id')
  getTodosByUserId(@Param() getTodosByUserIdDTO: GetTodosByEmailDTO) {
    return this.todosService.getTodosByEmail(getTodosByUserIdDTO);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  writeTodo(
    @Body() writeTodoDTO: WriteTodoDTO,
    @GetUser() user: Auth,
  ): Promise<Todos> {
    return this.todosService.writeTodo(writeTodoDTO, user);
  }

  @Get('/todo/:id')
  getTodoById(@Param() getTodoByIdDTO: GetTodoByIdDTO): Promise<Todos> {
    return this.todosService.getTodoById(getTodoByIdDTO);
  }

  @Delete('/:id')
  deleteTodoById(
    @Param() deleteTodoByIdDTO: DeleteTodoByIdDTO,
    @GetUser() user: Auth,
  ): Promise<void> {
    return this.todosService.deleteTodoById(deleteTodoByIdDTO, user);
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
