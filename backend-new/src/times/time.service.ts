import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TimesService {
    constructor(private prisma: PrismaService) {}

    async findAllTimes() {
        return this.prisma.stamp_times.findMany();
    }
}
