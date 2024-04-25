import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RootApiModule } from '@/apis/root/root.module';
import { UsersApiModule } from '@/apis/users/users.module';
import { PostsApiModule } from '@/apis/posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    RootApiModule,
    UsersApiModule,
    PostsApiModule,
  ],
})
export class AppModule {}
