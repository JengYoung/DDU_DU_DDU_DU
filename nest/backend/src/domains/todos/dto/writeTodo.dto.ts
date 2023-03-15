import { IsEnum, IsNotEmpty } from 'class-validator';
import { ETodoTypes } from 'src/common/models/todos.model';

export class WriteTodoDTO {
  @IsEnum(ETodoTypes)
  type: ETodoTypes;

  @IsNotEmpty()
  content: string;
}
