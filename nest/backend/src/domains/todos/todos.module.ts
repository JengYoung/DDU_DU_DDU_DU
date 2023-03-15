import { authProviders } from './../auth/auth.providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [...authProviders, AuthService],
})
export class TodosModule {}
