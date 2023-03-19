import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { databaseProviders } from './database.providers';

@Module({
  providers: [ConfigService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
