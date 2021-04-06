import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Characteristic {
  @Prop({ _id: true })
  id?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  type: string;
}

export type CharacteristicDocument = Characteristic & Document;

export const CharacteristicSchema = SchemaFactory.createForClass(
  Characteristic,
);
