import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { CreateUser } from './actions/create-user';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UpdateUser } from './actions/update-user';
import { DeleteUser } from './actions/delete-user';
import { deleteUserDTO } from './dto/delete-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.user.findMany();
    }

    async create(data: CreateUserDTO) {
        const action = new CreateUser(this.prisma);
        return action.excecute(data);
    }

    async update(uuid: number, data: UpdateUserDTO) {
        const action = new UpdateUser(this.prisma);
        return action.excecute(uuid, data);
    }

    async delete(uuid: number, data:deleteUserDTO) {
        const action = new DeleteUser(this.prisma);
        return action.excecute(uuid, data);
    }
}
