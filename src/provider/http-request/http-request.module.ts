import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SampleService } from './service/sample.service';
import axios from 'axios';
import { Config } from 'src/common/configuration/configuration';

@Module({
  imports: [HttpModule],
  providers: [
    SampleService,
    {
      provide: 'SAMPLE_SERVER',
      useFactory: () =>
        axios.create({
          baseURL: Config.getEnvironment().SAMPLE_SERVER_ADDR,
        }),
    },
  ],
})
export class HttpRequestModule {}
