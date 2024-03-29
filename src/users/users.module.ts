import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
