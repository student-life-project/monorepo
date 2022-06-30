import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Address } from '../address/address.schema';
import { Image } from '../image/image.schema';
import { Rate } from '../rate/rate.schema';

@Schema()
export class RentalPlace {
  @Prop({ required: true })
  owner: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  reason: string;

  @Prop({ required: true })
  typeSpace: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: true })
  availability: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Address', required: true })
  address: Address;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  services: string[];

  @Prop({ required: false })
  rules: string[];

  @Prop({ required: false })
  security: string[];

  @Prop([
    { type: MongooseSchema.Types.ObjectId, ref: 'Image', required: false },
  ])
  images: Image[];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Rate', required: false }])
  rates: Rate[];

  @Prop({ default: false, required: false })
  approved: boolean;
}

export type RentalPlaceDocument = RentalPlace & Document;

export const RentalPlaceSchema = SchemaFactory.createForClass(RentalPlace);
