import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  RentalPlace,
  RentalPlaceSchema,
} from '../rental-place/rental-place.schema';
import { Like, LikeSchema } from './like.schema';
import { LikeService } from './like.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Like.name, schema: LikeSchema },
      { name: RentalPlace.name, schema: RentalPlaceSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }]),
  ],
  controllers: [],
  providers: [LikeService],
})
export class LikeModule {}
