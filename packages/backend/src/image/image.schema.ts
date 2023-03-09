import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Image {
  @ApiProperty()
  @Prop({ _id: true })
  id?: string;

  @ApiProperty()
  @Prop({ requied: true })
  filename: string;

  @ApiProperty()
  @Prop({ required: true })
  location: string;

  @ApiProperty()
  @Prop({ required: true })
  mimetype: string;

  @ApiProperty()
  @Prop({ required: true })
  fullpath: string;

  @ApiProperty()
  @Prop({ required: true })
  size: number;

  @ApiProperty()
  @Prop({ type: MongooseSchema.Types.ObjectId })
  owner?: string;

  @ApiProperty()
  @Prop({ type: MongooseSchema.Types.ObjectId })
  rentalPlace?: string;
}

export type ImageDocument = Image & Document;

export const ImageSchema = SchemaFactory.createForClass(Image);
