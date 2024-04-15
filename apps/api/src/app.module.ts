import { Module } from '@nestjs/common';
import { RootApiModule } from '@/apis/root/root.module';

@Module({
  imports: [RootApiModule],
})
export class AppModule {}
