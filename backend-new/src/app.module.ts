import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { TimesModule } from './times/times.module';
import { InvoicesModule } from './invoices/invoices.module';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PrismaModule, CustomersModule, InvoicesModule, TimesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
