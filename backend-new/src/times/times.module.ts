import { Module } from '@nestjs/common';
import { TimesController } from './times.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TimesService } from './time.service';

@Module({
  imports: [PrismaModule],
  controllers: [TimesController],
  providers: [TimesService],
})

export class TimesModule {}