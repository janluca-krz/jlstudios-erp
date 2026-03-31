import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
    constructor(private prisma: PrismaService) {}

    async findAllCustomers() {
        return this.prisma.customers.findMany();
    }
}
