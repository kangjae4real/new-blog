import { Injectable } from '@nestjs/common';
import {
  CreatePostsRequest,
  PostsResponse,
  UpdatePostsRequest,
} from '@/services/posts/posts.dto';
import { DataSource } from 'typeorm';
import { PostsRepositoryFactory } from '@/repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly postsRepositoryFactory: PostsRepositoryFactory,
  ) {}

  public async findOne(uniqueId: number): Promise<PostsResponse | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const postsRepository = this.postsRepositoryFactory.create(entityManager);
      const findResult = await postsRepository.findOne(uniqueId);

      if (!findResult) {
        return null;
      }

      const { deletedAt, ...posts } = findResult;

      return posts;
    });
  }

  public async find(): Promise<PostsResponse[] | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const postsRepository = this.postsRepositoryFactory.create(entityManager);
      const findResult = await postsRepository.find();

      if (!findResult) {
        return null;
      }

      return findResult.map(({ deletedAt, ...post }) => post);
    });
  }

  public async update(
    uniqueId: number,
    updatePosts: UpdatePostsRequest,
  ): Promise<PostsResponse | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const postsRepository = this.postsRepositoryFactory.create(entityManager);
      const updateResult = await postsRepository.update(uniqueId, updatePosts);

      const { deletedAt, ...post } = updateResult;

      return post;
    });
  }

  public async delete(uniqueId: number): Promise<PostsResponse | null> {
    return await this.dataSource.transaction(async (entityManager) => {
      const postsRepository = this.postsRepositoryFactory.create(entityManager);
      return await postsRepository.delete(uniqueId);
    });
  }

  public async createPost(
    createPosts: CreatePostsRequest,
  ): Promise<PostsResponse> {
    return await this.dataSource.transaction(async (entityManager) => {
      const postsRepository = this.postsRepositoryFactory.create(entityManager);

      const { deletedAt, ...post } = await postsRepository.create(createPosts);

      return post;
    });
  }
}
