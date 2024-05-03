import { Module } from '@nestjs/common';
import { RDBModule } from '@/rdb/rdb.module';
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
    UsersRepository,
    UsersRepositoryFactory,
    PostsRepository,
    PostsRepositoryFactory,
  ],
  exports: [
    UsersRepository,
    UsersRepositoryFactory,
    PostsRepository,
    PostsRepositoryFactory,
  ],
})
export class RepositoriesModule {}
