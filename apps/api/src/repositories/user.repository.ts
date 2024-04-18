import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(private readonly manager: EntityManager) {}
}

@Injectable()
export class UserRepositoryFactory {
  public create(manager: EntityManager): UserRepository {
    return new UserRepository(manager);
  }
}
