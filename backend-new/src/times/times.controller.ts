import { Controller, Get } from '@nestjs/common';
import { TimesService } from './time.service';

@Controller('times')
export class TimesController {
  constructor(private timesService: TimesService) {}

  @Get()
  getTimes() {
    return this.timesService.findAllTimes();
  }
}