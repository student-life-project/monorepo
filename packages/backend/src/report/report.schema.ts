import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Report {
  @Prop({ _id: true })
  id?: string;

  @Prop({ required: true })
  reporterId: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  type: string;

  @Prop({ default: false })
  approved: boolean;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ required: false })
  reportOriginUrl?: string;

  @Prop({ required: true })
  reassson: string;
}

export type ReportDocument = Report & Document;

export const ReportSchema = SchemaFactory.createForClass(Report);
