import { ConflictException, Inject, PipeTransform } from '@nestjs/common';
import { repositoryToken } from 'src/common/tokens';
import { Repository } from 'typeorm';
import { Auth } from '../entities/auth.entity';

export class EmailValidationPipe implements PipeTransform {
  constructor(
    @Inject(repositoryToken.auth)
    private authRepository: Repository<Auth>,
  ) {}

  async transform(value: any) {
    const { id } = value;
    const user = await this.authRepository.findOneBy({ id });

    if (user) {
      throw new ConflictException(`Email is already registered.`);
    }

    return value;
  }
}
