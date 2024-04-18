import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RootApiModule } from '@/apis/root/root.module';
import { UserApiModule } from '@/apis/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    RootApiModule,
    UserApiModule,
  ],
})
export class AppModule {}
