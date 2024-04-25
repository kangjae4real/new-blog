import { Module } from '@nestjs/common';
import { RDBModule } from '@/rdb/rdb.module';
import {
  AuthRepository,
  AuthRepositoryFactory,
} from '@/repositories/auth.repository';
import {
  UsersRepository,
  UsersRepositoryFactory,
} from '@/repositories/users.repository';
import {
  PostsRepository,
  PostsRepositoryFactory,
} from '@/repositories/posts.repository';

@Module({
  imports: [RDBModule],
  providers: [
    AuthRepository,
    AuthRepositoryFactory,
    UsersRepository,
    UsersRepositoryFactory,
    PostsRepository,
    PostsRepositoryFactory,
  ],
  exports: [
    AuthRepository,
    AuthRepositoryFactory,
    UsersRepository,
    UsersRepositoryFactory,
    PostsRepository,
    PostsRepositoryFactory,
  ],
})
export class RepositoriesModule {}
