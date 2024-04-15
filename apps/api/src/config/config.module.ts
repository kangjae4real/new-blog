import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from '@/config/config.service';
import commonConfig from '@/config/config.common';
import databaseConfig from '@/config/config.database';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [commonConfig, databaseConfig],
    }),
  ],
  providers: [ConfigService],
})
export class ConfigModule {}
