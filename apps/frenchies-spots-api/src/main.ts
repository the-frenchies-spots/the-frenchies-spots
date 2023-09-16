import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      process.env.FRONT_PROD_URL,
      process.env.FRONT_DEV_URL,
      process.env.FRONT_PROD_URL + '/',
      process.env.FRONT_DEV_URL + '/',
      process.env.FRONT_PROD_URL + '/*',
      process.env.FRONT_DEV_URL + '/*',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
