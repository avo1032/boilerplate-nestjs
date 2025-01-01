import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';
import { Sample } from './entity/sample.entity';
import { SampleRepository } from './repository/sample.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  controllers: [SampleController],
  providers: [SampleService, SampleRepository],
})
export class SampleModule {}
