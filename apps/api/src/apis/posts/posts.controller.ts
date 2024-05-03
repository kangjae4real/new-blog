import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
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
  @ApiOkResponse({
    description: 'Successfully response',
    type: PostsResponse,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'Posts not found.',
  })
  @Get()
  public async getPosts(): Promise<PostsResponse[]> {
    const findResult = await this.postsService.find();

    if (!findResult || !findResult.length) {
      throw new NotFoundException('Posts not found.');
    }

    return findResult;
  }

  @ApiOperation({
    summary: 'Get one post',
    description: 'Get one post with id',
  })
  @ApiOkResponse({
    description: 'Successfully response',
    type: PostsResponse,
  })
  @ApiBadRequestResponse({
    description: `"id" is missing.`,
  })
  @ApiNotFoundResponse({
    description: 'Posts not found.',
  })
  @Get(':id')
  public async getPost(@Param('id') id: number): Promise<PostsResponse> {
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
  @ApiOkResponse({
    description: 'Successfully response',
    type: PostsResponse,
  })
  @ApiBadRequestResponse({
    description: `"id" or "title" or "content" is missing.`,
  })
  @ApiNotFoundResponse({
    description: 'Posts not found.',
  })
  @Patch(':id')
  public async updatePost(
    @Param('id') id: number,
    @Body() updatePost: UpdatePostsRequest,
  ): Promise<PostsResponse> {
    if (!id) {
      throw new BadRequestException(`"id" is missing.`);
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
  @ApiOkResponse({
    description: 'Successfully response',
    type: PostsResponse,
  })
  @ApiBadRequestResponse({
    description: `"id" is missing.`,
  })
  @ApiNotFoundResponse({
    description: 'Posts not found.',
  })
  @Delete(':id')
  async deletePost(@Param('id') id: number): Promise<PostsResponse> {
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
    summary: 'Create post',
    description: 'Create one post',
  })
  @ApiOkResponse({
    description: 'Successfully response',
    type: PostsResponse,
  })
  @ApiBadRequestResponse({
    description: `"title" or "content" or "writer" is missing.`,
  })
  @Post()
  public async createPost(
    @Body() createPost: CreatePostsRequest,
  ): Promise<PostsResponse> {
    if (!createPost.title || !createPost.content || !createPost.writer) {
      throw new BadRequestException(
        `"title" or "content" or "writer" is missing.`,
      );
    }

    return await this.postsService.createPost(createPost);
  }
}
