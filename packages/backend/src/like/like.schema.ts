import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ERateType } from '@student_life/common';
import { Document, Schema as MongooseSchema } from 'mongoose';

// eslint-disable-next-line import/no-cycle
// import { RentalPlace } from '../rental-place/rental-place.schema';

@Schema()
export class Like {
  @ApiProperty()
  @Prop({ _id: true })
  id?: string;

  @ApiProperty()
  @Prop({ enum: ERateType, default: ERateType.PLACE, required: true })
  type: ERateType;

  @ApiProperty()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'RentalPlace',
    required: true,
  })
  placeId: string;

  @ApiProperty()
  @Prop({ default: null })
  ownerId: string;
}

export type LikeDocument = Like & Document;

export const LikeSchema = SchemaFactory.createForClass(Like);
