import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  RentalPlace,
  RentalPlaceSchema,
} from '../rental-place/rental-place.schema';
import { Comment, CommentSchema } from './comment.schema';
import { CommentService } from './comment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comment.name, schema: CommentSchema },
      { name: RentalPlace.name, schema: RentalPlaceSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  providers: [CommentService],
})
export class CommentModule {}
