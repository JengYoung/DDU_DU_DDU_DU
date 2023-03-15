import { Module } from '@nestjs/common';
import { Auth } from './auth.providers';

@Module({
  providers: [Auth],
})
export class AuthModule {}
