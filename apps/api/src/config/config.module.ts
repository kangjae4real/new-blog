import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from '@/config/config.service';
import commonConfig from '@/config/config.common';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [commonConfig],
    }),
  ],
  providers: [ConfigService],
})
export class ConfigModule {}
