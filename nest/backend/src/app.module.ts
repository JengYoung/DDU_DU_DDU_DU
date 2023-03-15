import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './domains/todos/todos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ['.env.local'] }), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
