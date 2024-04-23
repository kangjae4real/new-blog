import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UsersEntity } from '@/rdb/users.entity';
import { CreateUsersRequest, UsersResponse } from '@/services/users/users.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly entityManager: EntityManager) {}

  public async findOne(uniqueId: number): Promise<UsersResponse | null> {
    const findResult = this.entityManager.findOne(UsersEntity, {
      where: {
        id: uniqueId,
      },
    });

    if (!findResult) {
      return null;
    }

    return findResult;
  }

  public async create(createUser: CreateUsersRequest): Promise<UsersEntity> {
    const { name, email, password } = createUser;
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
