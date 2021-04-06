import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Address } from '../address/address.schema';
import { Characteristic } from '../charactetiristic/characteristic.schema';
import { Image } from '../image/image.schema';
import { Rate } from '../rate/rate.schema';
import { Rule } from '../rule/rule.schema';
import { Service } from '../service/service.schema';

@Schema()
export class RentalPlace {
  @Prop({ required: true })
  title: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Address', required: true })
  address: Address;

  @Prop({ required: true })
  price: number;

  @Prop([
    { type: MongooseSchema.Types.ObjectId, ref: 'Service', required: true },
  ])
  service: Service[];

  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: 'Characteristic',
      required: true,
    },
  ])
  characteristics: Characteristic[];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Rule', required: true }])
  rules: Rule[];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Image', required: true }])
  images: Image[];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Rate', required: true }])
  scores: Rate[];

  @Prop({ default: false })
  availabe: boolean;

  @Prop({ default: false })
  approved: boolean;
}

export type RentalPlaceDocument = RentalPlace & Document;

export const RentalPlaceSchema = SchemaFactory.createForClass(RentalPlace);
