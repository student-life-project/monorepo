import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });

  app.setGlobalPrefix('/v1/api');

  app.enableCors();

  app.useGlobalPipes(
    // new ValidationPipe(),
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('StudentLife')
    .setDescription('Backend application for lessers and students as API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });

  await app.listen(3010);
}

bootstrap();
