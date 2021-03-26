import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Rule {
  @Prop({ _id: true })
  id?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  type: string;
}

export type RuleDocument = Rule & Document;

export const RuleSchema = SchemaFactory.createForClass(Rule);
