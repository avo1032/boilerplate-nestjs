import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Sample } from '../entity/sample.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';

@Injectable()
export class SampleRepository {
  constructor(
    @InjectRepository(Sample)
    private readonly sampleRepository: Repository<Sample>,
  ) {}

  async findOneByPk(id: number): Promise<Sample | null> {
    return this.sampleRepository.findOneBy({ id });
  }

  async save(saveOptions: DeepPartial<Sample>): Promise<Sample> {
    return this.sampleRepository.save(saveOptions);
  }
}
