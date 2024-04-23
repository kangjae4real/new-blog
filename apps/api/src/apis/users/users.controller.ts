import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '@/services/users/users.service';
import { CreateUsersRequest, UsersResponse } from '@/services/users/users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<UsersResponse> {
    if (!id) {
      throw new BadRequestException(`"id" is missing.`);
    }

    const findResult = await this.usersService.findOne(id);

    if (!findResult) {
      throw new NotFoundException('User Not Found.');
    }

    return findResult;
  }

  @Post()
  async createUser(
    @Body() createUser: CreateUsersRequest,
  ): Promise<UsersResponse> {
    if (!createUser.name || !createUser.email || !createUser.password) {
      throw new BadRequestException();
    }

    return await this.usersService.createUser(createUser);
  }
}
