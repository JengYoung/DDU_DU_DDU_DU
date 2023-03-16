import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { repositoryToken } from 'src/common/tokens';
import { Repository } from 'typeorm';
import { AuthIdDTO, CreateUserDTO, LoginPayloadDTO } from './dtos/auth.dto';
import { Auth } from './entities/auth.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private logger: Logger;
  constructor(
    @Inject(repositoryToken.auth)
    private authRepository: Repository<Auth>,
    private jwtService: JwtService,
  ) {
    this.logger = new Logger();
  }

  async getUserById(getUserByIdDTO: AuthIdDTO) {
    const user = await this.authRepository.findOneBy({ id: getUserByIdDTO.id });

    if (!user) {
      throw new NotFoundException(`User cannot found.`);
    }

    return user;
  }

  /**
   * {
    "content": "jengyoung.developer@gmail.com",
    "type": "PRIVATE"
}
   */

  async register(createUserDTO: CreateUserDTO) {
    const { email, password } = createUserDTO;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const user = await this.authRepository.create({
        email,
        password: hashedPassword,
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

  async login(payload: LoginPayloadDTO) {
    try {
      const { email, password } = payload;

      const user = await this.authRepository.findOneBy({ email });

      if (!user) {
        throw new NotFoundException('해당 이메일로 등록된 유저가 없습니다.');
      }

      const isValidUser = await bcrypt.compare(password, user.password);
      if (!isValidUser) {
        throw new UnauthorizedException(
          '이메일과 비밀번호를 다시 확인해주세요.',
        );
      }

      const userTokenData = { email };
      const accessToken = await this.jwtService.sign(userTokenData);

      this.logger.verbose(`${user.id} user Login success.`);
      return { accessToken };
    } catch (e) {
      const statusCode = e?.response?.statusCode;
      if (statusCode === 401) {
        throw new UnauthorizedException(e.message);
      } else if (statusCode === 404) {
        throw new NotFoundException(e.message);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
