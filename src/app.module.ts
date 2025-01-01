import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './provider/database/database.module';
import { SampleModule } from './domain/sample/sample.module';

@Module({
  imports: [DatabaseModule, SampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
