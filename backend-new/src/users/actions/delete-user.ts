import { PrismaService } from "../../prisma/prisma.service";
import { deleteUserDTO } from "../dto/delete-user.dto";

export class DeleteUser {
    constructor(private prisma: PrismaService) {}

    excecute(uuid: number, data: deleteUserDTO) {
        return this.prisma.user.delete({
            where: { UUID: Number(uuid) }
        });
    }
}