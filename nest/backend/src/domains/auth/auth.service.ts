import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { repositoryToken } from 'src/common/tokens';
import { Repository } from 'typeorm';
import { AuthIdDTO, CreateUserDTO } from './dtos/auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(repositoryToken.auth)
    private authRepository: Repository<Auth>,
  ) {}

  async getUserById(getUserByIdDTO: AuthIdDTO) {
    const user = await this.authRepository.findOneBy({ id: getUserByIdDTO.id });

    console.log(user);

    if (!user) {
      throw new NotFoundException(`User cannot found.`);
    }

    return user;
  }

  async register(createUserDTO: CreateUserDTO) {
    const { email, password } = createUserDTO;

    try {
      const user = await this.authRepository.create({
        email,
        password,
      });

      await this.authRepository.save(user);
    } catch (e) {
      if (e.code === '23505') {
        throw new ConflictException('Already registered ID');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
