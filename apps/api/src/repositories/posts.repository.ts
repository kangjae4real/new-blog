import { EntityManager } from 'typeorm';
import {
  CreatePostsRequest,
  PostsResponse,
  UpdatePostsRequest,
} from '@/services/posts/posts.dto';
import { PostsEntity } from '@/rdb/posts.entity';

export class PostsRepository {
  constructor(private readonly entityManager: EntityManager) {}

  public async findOne(uniqueId: number): Promise<PostsResponse | null> {
    const findResult = await this.entityManager.findOne(PostsEntity, {
      where: {
        id: uniqueId,
      },
    });

    if (!findResult) {
      return null;
    }

    return findResult;
  }

  public async update(
    uniqueId: number,
    updatePosts: UpdatePostsRequest,
  ): Promise<PostsResponse | null> {
    const updateResult = await this.entityManager.update(
      PostsEntity,
      {
        id: uniqueId,
      },
      updatePosts,
    );

    if (!updateResult.affected) {
      return null;
    }

    return await this.findOne(uniqueId);
  }

  public async delete(uniqueId: number): Promise<PostsResponse | null> {
    const findResult = await this.findOne(uniqueId);

    if (!findResult) {
      return null;
    }

    const deleteResult = await this.entityManager.delete(PostsEntity, {
      id: findResult.id,
    });

    if (!deleteResult.affected) {
      return null;
    }

    return findResult;
  }

  public async create(createPosts: CreatePostsRequest): Promise<PostsResponse> {
    const { title, content, writer } = createPosts;
    const createResult = this.entityManager.create(PostsEntity, {
      title,
      content,
      writer,
    });

    return this.entityManager.save(createResult);
  }
}

export class PostsRepositoryFactory {
  public create(entityManager: EntityManager): PostsRepository {
    return new PostsRepository(entityManager);
  }
}
