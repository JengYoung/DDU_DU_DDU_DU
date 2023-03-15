import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { todosProviders } from './providers/todos.providers';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [...todosProviders, TodosService],
})
export class TodosModule {}
