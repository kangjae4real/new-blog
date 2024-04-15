import { Module } from '@nestjs/common';
import { RootController } from '@/apis/root/root.controller';

@Module({
  controllers: [RootController],
})
export class RootApiModule {}
