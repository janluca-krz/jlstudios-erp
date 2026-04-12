import { PrismaService } from '../../prisma/prisma.service';
import { UpdateUserDTO } from '../dto/update-user.dto';

export class UpdateUser {
    constructor(private prisma: PrismaService) {}

    excecute (uuid: number, data: UpdateUserDTO) {
        return this.prisma.user.update({
            where : { UUID: Number(uuid) },
            data,
        });
    }
}