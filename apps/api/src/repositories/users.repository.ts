import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UsersEntity } from '@/rdb/users.entity';
import {
  CreateUsersRequest,
  UpdateUsersRequest,
  UsersResponse,
} from '@/services/users/users.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly entityManager: EntityManager) {}

  public async findOne(uniqueId: number): Promise<UsersEntity | null> {
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

  public async find(): Promise<UsersEntity[] | null> {
    const findResult = this.entityManager.find(UsersEntity);

    if (!findResult) {
      return null;
    }

    return findResult;
  }

  public async update(
    uniqueId: number,
    { name, email, password }: UpdateUsersRequest,
  ): Promise<UsersEntity | null> {
    const findResult = await this.findOne(uniqueId);

    if (!findResult) {
      return null;
    }
    if (name) {
      findResult.name = name;
    }
    if (email) {
      findResult.email = email;
    }
    if (password) {
      findResult.password = password;
    }

    const updateResult = await this.entityManager.save(findResult);

    if (!updateResult) {
      return null;
    }

    return updateResult;
  }

  public async delete(uniqueId: number): Promise<UsersEntity | null> {
    const findResult = await this.findOne(uniqueId);

    if (!findResult) {
      return null;
    }

    const deleteResult = await this.entityManager.delete(UsersEntity, {
      id: uniqueId,
    });

    if (!deleteResult.affected) {
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
