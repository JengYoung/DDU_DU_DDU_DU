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
import { AuthIdDTO, CreateUserDTO } from './dtos/auth.dto';
import { EmailValidationPipe } from './pipes/emailValidation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/:id')
  @UsePipes(ValidationPipe)
  getUserById(@Param() getUserByIdDTO: AuthIdDTO) {
    return this.authService.getUserById(getUserByIdDTO);
  }

  @Post('/register')
  @UsePipes(ValidationPipe, EmailValidationPipe)
  registerUser(@Body() createUserDTO: CreateUserDTO): Promise<void> {
    return this.authService.register(createUserDTO);
  }
}
