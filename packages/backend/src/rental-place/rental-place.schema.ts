import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Address } from '../address/address.schema';
// eslint-disable-next-line import/no-cycle
import { Comment } from '../comment/comment.schema';
import {
  Gender,
  Reason,
  Rules,
  Security,
  Services,
  TypeSpace,
} from '../helper/types';
import { Image } from '../image/image.schema';
// eslint-disable-next-line import/no-cycle
import { Like } from '../like/like.schema';

const setPrice = (price: string) => {
  const findDigitsAndDotRegex = /\d*\.\d{1,2}/;

  price = price.replace(',', '');

  const findDot = price.split(findDigitsAndDotRegex);

  if (!findDot[2]) {
    price = `${price}.0`; // HACK Adds .0 so it works with whole numbers
  }

  return parseInt((parseFloat(price) * 100).toFixed(0), 10);
};

const getPrice = (price: number) => {
  return (price / 100).toFixed(2);
};

@Schema()
export class RentalPlace {
  @ApiProperty()
  @Prop({ _id: true })
  id?: string;

  @ApiProperty()
  @Prop({ required: true })
  owner: string;

  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  reason: Reason;

  @ApiProperty()
  @Prop({ required: true })
  typeSpace: TypeSpace;

  @ApiProperty()
  @Prop({ required: true })
  gender: Gender;

  @ApiProperty()
  @Prop({ required: true, set: setPrice, get: getPrice })
  price: string;

  @ApiProperty()
  @Prop({ default: true })
  availability: boolean;

  @ApiProperty()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Address', required: true })
  address: Address;

  @ApiProperty()
  @Prop({ required: true })
  description: string;

  @ApiProperty()
  @Prop({ required: true })
  services: Services[];

  @ApiProperty()
  @Prop({ required: false })
  rules: Rules[];

  @ApiProperty()
  @Prop({ required: false })
  security: Security[];

  @ApiProperty({ type: [Image] })
  @Prop([
    { type: MongooseSchema.Types.ObjectId, ref: 'Image', required: false },
  ])
  images?: Image[];

  @ApiProperty({ type: [Like] })
  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Like', required: false }])
  likes?: Like[];

  @ApiProperty()
  @Prop({ default: false, required: false })
  approved: boolean;

  @ApiProperty({ type: [Comment] })
  @Prop([
    { type: MongooseSchema.Types.ObjectId, ref: 'Comment', required: false },
  ])
  comments?: Comment[];
}

export type RentalPlaceDocument = RentalPlace & Document;

export const RentalPlaceSchema = SchemaFactory.createForClass(RentalPlace);
