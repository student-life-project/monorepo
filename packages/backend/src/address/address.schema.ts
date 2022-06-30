import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Address {
  @Prop({ _id: true })
  id?: string;

  @Prop({ required: true })
  street: string;

  @Prop({ default: 'Jalisco' })
  state: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  neighborhood: string;

  @Prop({ required: true })
  stateCode: string;

  @Prop({ required: true })
  reference: string;

  @Prop({ required: true })
  zone: string;

  @Prop({ default: 'México' })
  country?: string;

  @Prop({ default: null })
  placeId?: string;

  @Prop({ default: null })
  ownerId?: string;
}

export type AddressDocument = Address & Document;

export const AddressSchema = SchemaFactory.createForClass(Address);
