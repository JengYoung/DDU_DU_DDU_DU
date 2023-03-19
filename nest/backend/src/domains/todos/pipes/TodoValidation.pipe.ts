import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ETodoTypes } from 'src/common/models/todos.model';

export class TodoValidationPipe implements PipeTransform {
  private readonly TodoType = [ETodoTypes.private, ETodoTypes.public];

  transform(value: any) {
    const nowValue = value.toUpperCase();

    if (!this.isTypeValid(nowValue)) {
      throw new BadRequestException(`Invalid Todo Type: ${nowValue}`);
    }

    return nowValue;
  }

  private isTypeValid(type: ETodoTypes) {
    return this.TodoType.includes(type);
  }
}
