import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schema/users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  async createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Put(':_id')
  async updateUser(@Param('_id') id: string, @Body() user: Partial<User>) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':_id')
  async deleteUser(@Param('_id') id: string) {
    return this.usersService.deleteUser(id);
  }

}
