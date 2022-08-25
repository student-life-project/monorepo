import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Address } from '../address/address.schema';

@Schema()
export class School {
  @ApiProperty()
  @Prop({ _id: true })
  id?: string;

  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Address', required: true })
  address: Address;
}

export type SchoolDocument = School & Document;

export const SchoolSchema = SchemaFactory.createForClass(School);
