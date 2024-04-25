import { Module } from '@nestjs/common';
import { AuthController } from '@/apis/auth/auth.controller';
import { AuthServiceModule } from '@/services/auth/auth.module';

@Module({
  imports: [AuthServiceModule],
  controllers: [AuthController],
})
export class AuthApiModule {}
