import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api');
  app.enableCors();
  app.useGlobalPipes(
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
