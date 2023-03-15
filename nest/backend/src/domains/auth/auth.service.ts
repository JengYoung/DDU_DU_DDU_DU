import { Inject, Injectable } from '@nestjs/common';
import { repositoryToken } from 'src/common/tokens';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(repositoryToken.auth)
    private authRepository: Repository<Auth>,
  ) {}

  async register(createUserDTO: CreateUserDTO) {
    const { email, password } = createUserDTO;

    const user = await this.authRepository.create({
      email,
      password,
    });

    await this.authRepository.save(user);
  }
}
