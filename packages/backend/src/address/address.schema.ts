import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

// import { Point } from './point.schema';

@Schema()
export class Address {
  @ApiProperty()
  @Prop({ _id: true })
  id?: string;

  @ApiProperty()
  @Prop({ required: true })
  street: string;

  @ApiProperty()
  @Prop({ required: true })
  extNumber: string;

  @ApiPropertyOptional()
  @Prop({ required: false })
  intNumber: string;

  @ApiPropertyOptional()
  @Prop({ required: false })
  crossStreet: string;

  @ApiProperty()
  @Prop({ default: 'Jalisco' })
  state: string;

  @ApiProperty()
  @Prop({ required: true })
  city: string;

  @ApiProperty()
  @Prop({ required: true })
  stateCode: string;

  @ApiProperty()
  @Prop({ required: true, default: 'MX' })
  countryCode: string;

  @ApiProperty()
  @Prop({ required: true })
  reference: string;

  @ApiProperty()
  @Prop({ required: true })
  cologne: string;

  @ApiProperty()
  @Prop({ default: 'México' })
  country?: string;

  // @ApiProperty()
  // @Prop({ required: false })
  // location?: Point;

  @ApiProperty()
  @Prop({ default: null })
  placeId?: string;

  @ApiProperty()
  @Prop({ default: null })
  ownerId?: string;
}

export type AddressDocument = Address & Document;

export const AddressSchema = SchemaFactory.createForClass(Address);
