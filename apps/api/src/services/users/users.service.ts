import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UsersRepositoryFactory } from '@/repositories/users.repository';
import { CreateUsersRequest, UsersResponse } from '@/services/users/users.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly usersRepositoryFactory: UsersRepositoryFactory,
  ) {}

  public async findOne(uniqueId: number): Promise<UsersResponse | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const usersRepository = this.usersRepositoryFactory.create(entityManager);
      const findResult = await usersRepository.findOne(uniqueId);

      if (!findResult) {
        return null;
      }

      const { id, name, email, createdAt, updatedAt } = findResult;

      return {
        id,
        name,
        email,
        createdAt,
        updatedAt,
      };
    });
  }

  public async createUser(
    createUser: CreateUsersRequest,
  ): Promise<UsersResponse> {
    return await this.dataSource.transaction(async (entityManager) => {
      const usersRepository = this.usersRepositoryFactory.create(entityManager);

      const { id, name, email, createdAt, updatedAt } =
        await usersRepository.create(createUser);

      return {
        id,
        name,
        email,
        createdAt,
        updatedAt,
      };
    });
  }
}
