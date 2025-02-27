import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './common/exception/business-exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new BusinessException('SAMPLE_ERROR', '123');
  }
}
