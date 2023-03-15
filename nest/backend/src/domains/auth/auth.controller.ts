import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  async registerUser(@Body() createUserDTO: CreateUserDTO): Promise<void> {
    return this.authService.register(createUserDTO);
  }
}
