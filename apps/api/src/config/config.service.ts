import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { Config } from '@/config/config.type';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get(envKey: keyof Config): string | number {
    return this.configService.get(envKey);
  }
}
