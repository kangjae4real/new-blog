import { Module } from '@nestjs/common';
import { PostsServiceModule } from '@/services/posts/posts.module';
import { PostsController } from '@/apis/posts/posts.controller';

@Module({
  imports: [PostsServiceModule],
  controllers: [PostsController],
})
export class PostsApiModule {}
