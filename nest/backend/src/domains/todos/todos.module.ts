import { TodosController } from './todos.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TodosService } from './todos.service';
import { todosProviders } from './providers/todos.providers';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [TodosController],
  providers: [...todosProviders, TodosService],
})
export class TodosModule {}
