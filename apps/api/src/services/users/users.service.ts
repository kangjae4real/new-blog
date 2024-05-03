import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UsersRepositoryFactory } from '@/repositories/users.repository';
import {
  CreateUsersRequest,
  UpdateUsersRequest,
  UsersResponse,
} from '@/services/users/users.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly usersRepositoryFactory: UsersRepositoryFactory,
  ) {}

  public async findOneUser(uniqueId: number): Promise<UsersResponse | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const usersRepository = this.usersRepositoryFactory.create(entityManager);
      const findResult = await usersRepository.findOne(uniqueId);

      if (!findResult) {
        return null;
      }

      const { password, deletedAt, ...user } = findResult;

      return user;
    });
  }

  public async findUsers(): Promise<UsersResponse[] | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const usersRepository = this.usersRepositoryFactory.create(entityManager);
      const findResult = await usersRepository.find();

      if (!findResult) {
        return null;
      }

      return findResult.map(({ password, deletedAt, ...user }) => user);
    });
  }

  public async updateUser(
    uniqueId: number,
    updateUsers: UpdateUsersRequest,
  ): Promise<UsersResponse | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const usersRepository = this.usersRepositoryFactory.create(entityManager);
      const updateResult = await usersRepository.update(uniqueId, updateUsers);

      if (!updateResult) {
        return null;
      }

      const { password, deletedAt, ...user } = updateResult;

      return user;
    });
  }

  public async deleteUser(uniqueId: number): Promise<UsersResponse | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const usersRepository = this.usersRepositoryFactory.create(entityManager);
      const deleteResult = await usersRepository.delete(uniqueId);

      if (!deleteResult) {
        return null;
      }

      const { password, deletedAt, ...user } = deleteResult;

      return user;
    });
  }

  public async createUser(
    createUser: CreateUsersRequest,
  ): Promise<UsersResponse> {
    return await this.dataSource.transaction(async (entityManager) => {
      const usersRepository = this.usersRepositoryFactory.create(entityManager);

      const { password, deletedAt, ...user } =
        await usersRepository.create(createUser);

      return user;
    });
  }
}
