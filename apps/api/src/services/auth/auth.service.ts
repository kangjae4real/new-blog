import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AuthRepositoryFactory } from '@/repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly authRepositoryFactory: AuthRepositoryFactory,
  ) {}
}
