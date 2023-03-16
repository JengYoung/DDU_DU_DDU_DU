import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Unique } from 'typeorm';
import { Auth } from '../entities/auth.entity';

const PASSWORD_REGEX = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const PASSWORD_SPECIAL_CHARACTOR = /[^\w]/;
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

export class AuthIdDTO implements Pick<AuthDTO, 'id'> {
  /**
   * @description
   * 굳이 number일 필요가 없다.
   */
  @IsNotEmpty()
  id: number;
}

@Unique(['email'])
export class CreateUserDTO implements Pick<AuthDTO, 'email' | 'password'> {
  @IsEmail()
  email: AuthDTO['email'];

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(PASSWORD_REGEX, {
    message: 'password too weak',
  })
  @Matches(PASSWORD_SPECIAL_CHARACTOR, {
    message: 'password must have least 1 special character.',
  })
  password: AuthDTO['password'];
}
