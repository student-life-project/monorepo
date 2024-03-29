import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

// eslint-disable-next-line import/no-cycle
// import { RentalPlace } from '../rental-place/rental-place.schema';

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
  placeId: string;

  @ApiProperty()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  ownerId: string;

  @ApiProperty()
  @Prop({ required: true })
  comment: string;

  @ApiProperty()
  @Prop({ required: false, default: () => new Date() })
  creationDate?: Date;
}

export type CommentDocument = Comment & Document;

export const CommentSchema = SchemaFactory.createForClass(Comment);
