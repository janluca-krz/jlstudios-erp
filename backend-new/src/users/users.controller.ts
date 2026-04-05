import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() body: CreateUserDTO) {
    return this.usersService.create(body);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: number,
    @Body() body : UpdateUserDTO
  ) {
    return this.usersService.update(uuid, body);
  }
}