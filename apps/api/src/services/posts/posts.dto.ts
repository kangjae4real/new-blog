import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PostsResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  writer: string;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}

export class CreatePostsRequest {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  content: string;

  @ApiProperty({ required: true })
  writer: string;
}

export class UpdatePostsRequest {
  @ApiPropertyOptional()
  title?: string;

  @ApiPropertyOptional()
  content?: string;
}
