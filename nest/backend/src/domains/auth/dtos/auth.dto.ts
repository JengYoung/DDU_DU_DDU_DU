import {
  IsEmail,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Auth } from '../entities/auth.entity';

const PASSWORD_REGEX = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
export class AuthDTO extends Auth {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(PASSWORD_REGEX, {
    message: 'password too weak',
  })
  password: string;
}

export class CreateUserDTO implements Pick<AuthDTO, 'email' | 'password'> {
  @IsEmail()
  email: AuthDTO['email'];

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(PASSWORD_REGEX, {
    message: 'password too weak',
  })
  password: AuthDTO['password'];
}
