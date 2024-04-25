import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@/repositories/repositories.module';
import { PostsService } from '@/services/posts/posts.service';

@Module({
  imports: [RepositoriesModule],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsServiceModule {}
