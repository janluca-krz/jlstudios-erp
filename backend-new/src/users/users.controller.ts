import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { deleteUserDTO } from './dto/delete-user.dto';

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

  @Delete(':uuid')
  delete(
    @Param('uuid') uuid: number,
    @Body() body : deleteUserDTO
  ) {
    return this.usersService.delete(uuid, body);
  }
}