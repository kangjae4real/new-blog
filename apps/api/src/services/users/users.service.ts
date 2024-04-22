import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UsersRepositoryFactory } from '@/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly usersRepositoryFactory: UsersRepositoryFactory,
  ) {}

  public async createUser(name: string, email: string, password: string) {
    return await this.dataSource.transaction(async (entityManager) => {
      const usersRepository = this.usersRepositoryFactory.create(entityManager);

      return await usersRepository.create(name, email, password);
    });
  }
}
