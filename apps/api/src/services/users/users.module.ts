import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@/repositories/repositories.module';
import { UsersService } from '@/services/users/users.service';

@Module({
  imports: [RepositoriesModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersServiceModule {}
