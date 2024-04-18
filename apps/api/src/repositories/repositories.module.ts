import { Module } from '@nestjs/common';
import { RDBModule } from '@/rdb/rdb.module';
import {
  UserRepository,
  UserRepositoryFactory,
} from '@/repositories/user.repository';

@Module({
  imports: [RDBModule],
  providers: [UserRepository, UserRepositoryFactory],
  exports: [UserRepository, UserRepositoryFactory],
})
export class RepositoriesModule {}
