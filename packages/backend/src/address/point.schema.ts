import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Point {
  @ApiProperty()
  @Prop({ required: true, enum: ['Point'] })
  type: string;

  @ApiProperty()
  @Prop({ required: true, type: [Number] })
  coordinates: number[];
}

export type PointDocument = Point & Document;

export const PointSchema = SchemaFactory.createForClass(Point);
