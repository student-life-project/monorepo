import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Image {
  @Prop({ _id: true })
  id?: string;

  @Prop({ requied: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  url: string;
}

export type ImageDocument = Image & Document;

export const ImageSchema = SchemaFactory.createForClass(Image);
