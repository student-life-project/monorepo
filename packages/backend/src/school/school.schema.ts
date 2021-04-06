import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Address } from '../address/address.schema';

@Schema()
export class School {
  @Prop({ _id: true })
  id?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Address', required: true })
  address: Address;
}

export type SchoolDocument = School & Document;

export const SchoolSchema = SchemaFactory.createForClass(School);
