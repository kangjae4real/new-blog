import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UsersEntity } from '@/rdb/users.entity';

@Injectable()
export class UsersRepository {
  constructor(private readonly entityManager: EntityManager) {}

  public async create(
    name: string,
    email: string,
    password: string,
  ): Promise<UsersEntity> {
    const userCreateResult = this.entityManager.create(UsersEntity, {
      name,
      email,
      password,
    });

    return this.entityManager.save(userCreateResult);
  }
}

@Injectable()
export class UsersRepositoryFactory {
  public create(entityManager: EntityManager): UsersRepository {
    return new UsersRepository(entityManager);
  }
}
