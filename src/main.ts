import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './common/configuration/configuration';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = Config.getEnvironment().PORT;
  await app.listen(port);
}
bootstrap();
