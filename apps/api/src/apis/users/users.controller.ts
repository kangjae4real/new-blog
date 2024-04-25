import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from '@/services/users/users.service';
import { CreateUsersRequest, UsersResponse } from '@/services/users/users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Get one user',
    description: 'Get one user with id',
  })
  @Get(':id')
  public async getUser(@Param('id') id: number): Promise<UsersResponse> {
    if (!id) {
      throw new BadRequestException(`"id" is missing.`);
    }

    const findResult = await this.usersService.findOne(id);

    if (!findResult) {
      throw new NotFoundException('User Not Found.');
    }

    return findResult;
  }

  @ApiOperation({
    summary: 'Create user',
    description: 'Create one user',
  })
  @Post()
  public async createUser(
    @Body() createUser: CreateUsersRequest,
  ): Promise<UsersResponse> {
    if (!createUser.name || !createUser.email || !createUser.password) {
      throw new BadRequestException();
    }

    return await this.usersService.createUser(createUser);
  }
}
