import { Module } from '@nestjs/common';
import { ConfigModule } from '@/config/config.module';
import { RootApiModule } from '@/apis/root/root.module';

@Module({
  imports: [ConfigModule, RootApiModule],
})
export class AppModule {}
