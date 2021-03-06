import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Image, ImageSchema } from './image.schema';
import { ImageService } from './image.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
  ],
  controllers: [],
  providers: [ImageService],
})
export class ImageModule {}
