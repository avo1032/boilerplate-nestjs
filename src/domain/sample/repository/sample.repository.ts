import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Sample } from '../entity/sample.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';

@Injectable()
export class SampleRepository {
  constructor(
    @InjectRepository(Sample)
    private readonly repository: Repository<Sample>,
  ) {}

  async getRepository(): Promise<Repository<Sample>> {
    return this.repository;
  }

  async findOneByPk(id: number): Promise<Sample | null> {
    return this.repository.findOneBy({ id });
  }

  async save(saveOptions: DeepPartial<Sample>): Promise<Sample> {
    return this.repository.save(saveOptions);
  }
}
