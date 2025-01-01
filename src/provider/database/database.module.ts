import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from '../../common/configuration/configuration';
import { join } from 'path';

const { DATABASE, NODE_ENV } = Config.getEnvironment();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: DATABASE.TYPE,
      host: DATABASE.HOST,
      port: DATABASE.PORT,
      username: DATABASE.USERNAME,
      password: DATABASE.PASSWORD,
      database: DATABASE.NAME,
      entities: [join(__dirname, '../../**/*.entity{.ts,.js}')],
      synchronize: NODE_ENV === 'test',
      logging: NODE_ENV === 'test',
    }),
  ],
})
export class DatabaseModule {}
