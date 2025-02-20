import { Injectable } from '@nestjs/common';
import { SampleRepository } from '../repository/sample.repository';
import { Sample } from '../entity/sample.entity';

@Injectable()
export class SampleService {
  constructor(private readonly sampleRepository: SampleRepository) {}

  async getSampleByPk(input: { id: number }): Promise<Sample> {
    return this.sampleRepository.findOneByPk(input.id);
  }

  async createSample(input: {
    name: string;
    description: string;
  }): Promise<Sample> {
    return this.sampleRepository.save(input);
  }
}
