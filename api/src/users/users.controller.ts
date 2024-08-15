import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  @UseGuards(JwtAuthGuard)
  async addUser(@Body() body: { name: string; email: string; phone: string }): Promise<User> {
    const user = await this.usersService.addUser(body.name, body.email, body.phone);
    console.log(user);
    return user;
  }

  @Get('get-user/:id')
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.getUserById(id);
  }
}
