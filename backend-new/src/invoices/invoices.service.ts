import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InvoicesService {
    constructor(private prisma: PrismaService) {}

    async findAllInvoices() {
        return this.prisma.iNVOICES.findMany();
    }
}
