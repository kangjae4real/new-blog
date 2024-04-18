import { Module } from '@nestjs/common';
import { UserServiceModule } from '@/services/user/user.module';
import { UserController } from '@/apis/user/user.controller';

@Module({
  imports: [UserServiceModule],
  controllers: [UserController],
})
export class UserApiModule {}
