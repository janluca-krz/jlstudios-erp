import { PrismaService } from "../../prisma/prisma.service";
import { CreateUserDTO } from "../dto/create-user.dto"

export class CreateUser {
    constructor(private prisma: PrismaService) {}

    excecute(data: CreateUserDTO) {
        return this.prisma.user.create({
            data,
        });
    }
}