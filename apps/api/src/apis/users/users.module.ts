import { Module } from '@nestjs/common';
import { UsersController } from '@/apis/users/users.controller';
import { UsersServiceModule } from '@/services/users/users.module';

@Module({
  imports: [UsersServiceModule],
  controllers: [UsersController],
})
export class UsersApiModule {}
