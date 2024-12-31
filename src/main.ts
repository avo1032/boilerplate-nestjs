import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './common/configuration/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = Config.getEnvironment().PORT;
  await app.listen(port);
}
bootstrap();
