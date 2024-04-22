import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '@/services/users/users.service';
import { CreateUserDTO, UserResponse } from '@/services/users/users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser() {}

  @Post()
  async createUser(@Body() body: CreateUserDTO): Promise<UserResponse> {
    const { name, email, password } = body;

    if (!name || !email || !password) {
      throw new BadRequestException();
    }

    return await this.usersService.createUser(name, email, password);
  }
}
