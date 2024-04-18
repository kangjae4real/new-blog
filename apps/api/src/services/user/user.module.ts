import { Module } from '@nestjs/common';
import { RDBModule } from '@/rdb/rdb.module';
import { UserService } from '@/services/user/user.service';

@Module({
  imports: [RDBModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserServiceModule {}
