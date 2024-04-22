import { Module } from '@nestjs/common';
import { RDBModule } from '@/rdb/rdb.module';
import {
  UsersRepository,
  UsersRepositoryFactory,
} from '@/repositories/users.repository';

@Module({
  imports: [RDBModule],
  providers: [UsersRepository, UsersRepositoryFactory],
  exports: [UsersRepository, UsersRepositoryFactory],
})
export class RepositoriesModule {}
