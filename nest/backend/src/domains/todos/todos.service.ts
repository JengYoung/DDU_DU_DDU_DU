import { Repository } from 'typeorm';
import { WriteTodoDTO } from './dto/writeTodo.dto';
import { ITodo } from '../../common/models/todos.model';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { GetTodoByIdDTO } from './dto/getTodoById.dto';
import { DeleteTodoByIdDTO } from './dto/deleteTodoById.dto';
import { UpdateTodoDTO } from './dto/updateTodo.dto';
import { repositoryToken } from 'src/common/tokens';
import { Todos } from './entities/todos.entity';
import { Auth } from '../auth/entities/auth.entity';
import { GetTodosByEmailDTO } from './dto/getTodosByEmail.dto';

@Injectable()
export class TodosService {
  constructor(
    @Inject(repositoryToken.todos)
    private todosRepository: Repository<Todos>,
  ) {}

  async getTodos(): Promise<Todos[]> {
    return await this.todosRepository.find();
  }

  async getTodosByEmail(emailDTO: GetTodosByEmailDTO) {
    const query = this.todosRepository.createQueryBuilder('todos');
    query.where('todos.userId = :userId', { userId: emailDTO.id });
    const todos = await query.getMany();

    return todos;
  }

  async writeTodo(writeTodoDTO: WriteTodoDTO, user: Auth): Promise<Todos> {
    const now = new Date();

    const { content, type } = writeTodoDTO;

    const todo: Todos = this.todosRepository.create({
      todoId: uuidV4(),
      type,
      content,
      completed: false,
      createdAt: now,
      updatedAt: now,
      user: {
        id: user.id,
        email: user.email,
      },
    });

    await this.todosRepository.save(todo);

    return todo;
  }

  async getTodoById(getTodoByIdDTO: GetTodoByIdDTO): Promise<Todos> {
    const result = await this.todosRepository.findOneBy({
      id: getTodoByIdDTO.id,
    });

    if (!result) {
      throw new NotFoundException(`Cannot find Todo with ${getTodoByIdDTO.id}`);
    }

    return result;
  }

  async deleteTodoById(deleteTodoByIdDTO: DeleteTodoByIdDTO) {
    const result = await this.todosRepository.delete({
      id: deleteTodoByIdDTO.id,
    });

    if (result.affected === 0) {
      throw new NotFoundException(
        `Cannot find Todo with Id ${deleteTodoByIdDTO.id}`,
      );
    }
  }

  async updateTodo(updateTodoDTO: UpdateTodoDTO) {
    if (!updateTodoDTO.id) {
      throw new BadRequestException('Id is Required in the Body');
    }

    const todo: ITodo = await this.getTodoById({ id: updateTodoDTO.id });

    const nextTodo = {
      ...todo,
      ...updateTodoDTO,
    };

    this.todosRepository.save(nextTodo);
  }
}
