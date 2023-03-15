import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ETodo } from '../todos.model';

export class TodoValidationPipe implements PipeTransform {
  private readonly TodoType = [ETodo.private, ETodo.public];

  transform(value: any) {
    const nowValue = value.toUpperCase();

    if (!this.isTypeValid(nowValue)) {
      throw new BadRequestException(`Invalid Todo Type: ${nowValue}`);
    }

    return nowValue;
  }

  private isTypeValid(type: ETodo) {
    return this.TodoType.includes(type);
  }
}
