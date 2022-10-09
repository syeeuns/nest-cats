import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    credentials: true
  })

  // http://localhost:8000/media/cats/fjsldkf.png 로 서빙할 수 있도록 설정
  app.useStaticAssets(path.join(__dirname, './common', 'uploads'), {
    prefix: '/media'
  })
  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
