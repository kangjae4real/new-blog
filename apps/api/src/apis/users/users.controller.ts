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
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from '@/services/users/users.service';
import {
  CreateUsersRequest,
  UpdateUsersRequest,
  UsersResponse,
} from '@/services/users/users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Get one user',
    description: 'Get one user with id',
  })
  @ApiOkResponse({
    description: 'Successfully response',
    type: UsersResponse,
  })
  @ApiBadRequestResponse({
    description: `"id" is missing.`,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @Get(':id')
  public async getUser(@Param('id') id: number): Promise<UsersResponse> {
    if (!id) {
      throw new BadRequestException(`"id" is missing.`);
    }

    const findResult = await this.usersService.findOneUser(id);

    if (!findResult) {
      throw new NotFoundException('User not found.');
    }

    return findResult;
  }

  @ApiOperation({
    summary: 'Get users',
    description: 'Get users',
  })
  @ApiOkResponse({
    description: 'Successfully response',
    type: UsersResponse,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'Users not found.',
  })
  @Get()
  public async getUsers(): Promise<UsersResponse[]> {
    const findResult = await this.usersService.findUsers();

    if (!findResult || !findResult.length) {
      throw new NotFoundException('Users not found.');
    }

    return findResult;
  }

  @ApiOperation({
    summary: 'Update one user',
    description: 'Update one user with id',
  })
  @ApiOkResponse({
    description: 'Successfully response',
    type: UsersResponse,
  })
  @ApiBadRequestResponse({
    description: `"id" or "name" or "email" or "password" is missing.`,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @Patch(':id')
  public async updateUser(
    @Param('id') id: number,
    @Body() updateUsers: UpdateUsersRequest,
  ): Promise<UsersResponse> {
    if (!id) {
      throw new BadRequestException(`"id" is missing.`);
    }

    const updateResult = await this.usersService.updateUser(id, updateUsers);

    if (!updateResult) {
      throw new NotFoundException('User not found.');
    }

    return updateResult;
  }

  @ApiOperation({
    summary: 'Delete one user',
    description: 'Delete one user with id',
  })
  @ApiOkResponse({
    description: 'Successfully response',
    type: UsersResponse,
  })
  @ApiBadRequestResponse({
    description: `"id" is missing.`,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<UsersResponse> {
    if (!id) {
      throw new BadRequestException(`"id" is missing.`);
    }

    const deleteResult = await this.usersService.deleteUser(id);

    if (!deleteResult) {
      throw new NotFoundException('User not found.');
    }

    return deleteResult;
  }

  @ApiOperation({
    summary: 'Create user',
    description: 'Create one user',
  })
  @ApiOkResponse({
    description: 'Successfully response',
    type: UsersResponse,
  })
  @ApiBadRequestResponse({
    description: `"name" or "email" or "password" is missing`,
  })
  @Post()
  public async createUser(
    @Body() createUser: CreateUsersRequest,
  ): Promise<UsersResponse> {
    if (!createUser.name || !createUser.email || !createUser.password) {
      throw new BadRequestException(
        `"name" or "email" or "password" is missing`,
      );
    }

    return await this.usersService.createUser(createUser);
  }
}
