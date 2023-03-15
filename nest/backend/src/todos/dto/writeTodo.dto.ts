import { ETodo } from '../todos.model';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class WriteTodoDTO {
  @IsEnum(ETodo)
  type: ETodo;

  @IsNotEmpty()
  content: string;
}
