import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { Config } from '@/config/config.type';

@Injectable()
export class ConfigService {
  constructor(private readonly nestConfigService: NestConfigService) {}

  get(envKey: keyof Config) {
    return this.nestConfigService.get(envKey);
  }
}
