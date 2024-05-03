import { EntityManager } from 'typeorm';
import {
  CreatePostsRequest,
  UpdatePostsRequest,
} from '@/services/posts/posts.dto';
import { PostsEntity } from '@/rdb/posts.entity';

export class PostsRepository {
  constructor(private readonly entityManager: EntityManager) {}

  public async findOne(uniqueId: number): Promise<PostsEntity | null> {
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

  public async find(): Promise<PostsEntity[] | null> {
    const findResult = await this.entityManager.find(PostsEntity);

    if (!findResult) {
      return null;
    }

    return findResult;
  }

  public async update(
    uniqueId: number,
    { title, content }: UpdatePostsRequest,
  ): Promise<PostsEntity | null> {
    const post = await this.findOne(uniqueId);

    if (!post) {
      return null;
    }
    if (title) {
      post.title = title;
    }
    if (content) {
      post.content = content;
    }

    const updateResult = await this.entityManager.save(post);

    if (!updateResult) {
      return null;
    }

    return updateResult;
  }

  public async delete(uniqueId: number): Promise<PostsEntity | null> {
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

  public async create(createPosts: CreatePostsRequest): Promise<PostsEntity> {
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
