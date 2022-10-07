import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PaginationModule } from '../pagination/pagination.module';
import {
  RentalPlace,
  RentalPlaceSchema,
} from '../rental-place/rental-place.schema';
import { CommentController } from './comment.controller';
import { Comment, CommentSchema } from './comment.schema';
import { CommentService } from './comment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comment.name, schema: CommentSchema },
      { name: RentalPlace.name, schema: RentalPlaceSchema },
    ]),
    PaginationModule,
  ],
  exports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
