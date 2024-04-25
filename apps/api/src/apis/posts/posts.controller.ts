import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreatePostsRequest,
  PostsResponse,
  UpdatePostsRequest,
} from '@/services/posts/posts.dto';
import { PostsService } from '@/services/posts/posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({
    summary: 'Get posts',
    description: 'Get posts',
  })
  @Get()
  public async getPosts() {}

  @ApiOperation({
    summary: 'Get one post',
    description: 'Get one post with id',
  })
  @Get(':id')
  public async getPost(@Param('id') id: number) {
    if (!id) {
      throw new BadRequestException(`"id" is missing.`);
    }

    const findResult = await this.postsService.findOne(id);

    if (!findResult) {
      throw new NotFoundException('Post not found.');
    }

    return findResult;
  }

  @ApiOperation({
    summary: 'Update one post',
    description: 'Update one post',
  })
  @Put(':id')
  public async updatePost(
    @Param('id') id: number,
    @Body() updatePost: UpdatePostsRequest,
  ): Promise<PostsResponse> {
    if (!id || !updatePost.title || !updatePost.content) {
      throw new BadRequestException();
    }

    const updateResult = await this.postsService.update(id, updatePost);

    if (!updateResult) {
      throw new NotFoundException('Post not found.');
    }

    return updateResult;
  }

  @ApiOperation({
    summary: 'Delete one post',
    description: 'Delete one post',
  })
  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    if (!id) {
      throw new BadRequestException(`"id" is missing.`);
    }

    const deleteResult = await this.postsService.delete(id);

    if (!deleteResult) {
      throw new NotFoundException('Post not found.');
    }

    return deleteResult;
  }

  @ApiOperation({
    summary: 'Create one post',
    description: 'Create one post',
  })
  @Post()
  public async createPost(
    @Body() createPost: CreatePostsRequest,
  ): Promise<PostsResponse> {
    if (!createPost.title || !createPost.content || !createPost.writer) {
      throw new BadRequestException();
    }

    return await this.postsService.createPost(createPost);
  }
}
