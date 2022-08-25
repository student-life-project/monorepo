import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Like, LikeSchema } from './like.schema';
import { LikeService } from './like.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }]),
  ],
  controllers: [],
  providers: [LikeService],
})
export class LikeModule {}
