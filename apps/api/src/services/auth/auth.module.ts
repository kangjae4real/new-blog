import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@/repositories/repositories.module';
import { AuthService } from '@/services/auth/auth.service';

@Module({
  imports: [RepositoriesModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthServiceModule {}
