import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import {
  AuthIdDTO,
  CreateUserDTO,
  LoginPayloadDTO,
  LoginResponseDTO,
} from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/:id')
  @UsePipes(ValidationPipe)
  getUserById(@Param() getUserByIdDTO: AuthIdDTO) {
    return this.authService.getUserById(getUserByIdDTO);
  }

  @Post('/register')
  @UsePipes(ValidationPipe)
  registerUser(@Body() createUserDTO: CreateUserDTO): Promise<void> {
    return this.authService.register(createUserDTO);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  login(@Body() payload: LoginPayloadDTO): Promise<LoginResponseDTO> {
    return this.authService.login(payload);
  }
}
