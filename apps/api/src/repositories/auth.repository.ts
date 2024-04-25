import { EntityManager } from 'typeorm';

export class AuthRepository {
  constructor(private readonly entityManager: EntityManager) {}
}

export class AuthRepositoryFactory {
  public create(entityManager: EntityManager): AuthRepository {
    return new AuthRepository(entityManager);
  }
}
