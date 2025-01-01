import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SampleIdReqDto, SampleReqBodyDto } from './dto/sample-req.dto';
import { Sample } from './entity/sample.entity';

@Controller('samples')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get(':id')
  async getSampleByPk(@Param() params: SampleIdReqDto): Promise<Sample> {
    return this.sampleService.getSampleByPk(params);
  }

  @Post()
  async createSample(@Body() body: SampleReqBodyDto): Promise<Sample> {
    return this.sampleService.createSample(body);
  }
}
