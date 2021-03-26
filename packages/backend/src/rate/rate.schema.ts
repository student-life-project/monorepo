import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ERateType } from '@student_life/common';
import { Document } from 'mongoose';

@Schema()
export class Rate {
  @Prop({ _id: true })
  id?: string;

  @Prop({ required: true, min: 1, max: 5 })
  score: number;

  @Prop({ required: true })
  owerId: string;

  @Prop({ enum: ERateType, default: ERateType.PLACE, required: true })
  type: ERateType;

  @Prop({ default: null })
  placeId?: string;

  @Prop({ default: null })
  placeOwnerId?: string;
}

export type RateDocument = Rate & Document;

export const RateSchema = SchemaFactory.createForClass(Rate);
