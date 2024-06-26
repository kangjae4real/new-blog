import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ENTITY_ROOT, MIGRATION_ROOT, SRC_ROOT } from '@/constants';

const typeorm = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    synchronize: configService.get('ENV') === 'local',
    entities: [ENTITY_ROOT],
    autoLoadEntities: configService.get('ENV') === 'local',
    migrations: [MIGRATION_ROOT],
    migrationsTableName: 'migration_table',
  }),
});

@Module({
  imports: [typeorm],
  exports: [typeorm],
})
export class RDBModule {}
