import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
// import { RentalPlace } from 'src/rental-place/rental-place.schema';

@Schema()
export class Image {
  @Prop({ _id: true })
  id?: string;

  @Prop({ requied: true })
  filename: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  mimetype: string;

  @Prop({ required: true })
  fullpath: string;

  @Prop({ required: true })
  size: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  owner?: string;
}

export type ImageDocument = Image & Document;

export const ImageSchema = SchemaFactory.createForClass(Image);
