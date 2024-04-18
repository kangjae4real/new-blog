import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserRepositoryFactory } from '@/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly userRepositoryFactory: UserRepositoryFactory,
  ) {}

  public async createUser() {
    return await this.dataSource.transaction(async (entityManager) => {
      const userRepository = this.userRepositoryFactory.create(entityManager);
    });
  }
}
