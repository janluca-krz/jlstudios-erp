import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, PrismaService], //Added PrismaService to write Inject Data to SQL
  controllers: [UsersController],
})
export class UsersModule {}
