import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Document, Schema as MongooseSchema } from 'mongoose';

// eslint-disable-next-line import/no-cycle
import { RentalPlace } from '../rental-place/rental-place.schema';

@Schema()
export class Comment {
  @ApiProperty()
  @Prop({ _id: true })
  id?: string;

  @ApiProperty()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'RentalPlace',
    required: true,
  })
  placeId: RentalPlace;

  @ApiProperty()
  @Prop({ default: null })
  ownerId: string;

  @ApiProperty()
  @Prop({ requered: true })
  comment: string;
}

export type CommentDocument = Comment & Document;

export const CommentSchema = SchemaFactory.createForClass(Comment);
