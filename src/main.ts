import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from 'src/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Gateway Donaciones');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(envs.port);

  logger.log(`Gateway Donaciones running on port ${envs.port}`);
}
bootstrap();
