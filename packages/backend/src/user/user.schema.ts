import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { UserType } from '../helper/types';
import { Image } from '../image/image.schema';
import { Owner } from '../owner/owner.schema';
import { Report } from '../report/report.schema';
import { Student } from '../student/student.schema';

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  birthDate: Date;

  @Prop({ required: true })
  password: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Image' })
  photo?: Image;

  @Prop({ required: true, enum: UserType, default: UserType.STUDENT })
  type: UserType;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Report' }])
  reports: Report[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Student', default: null })
  studentInfo: Student;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Owner', default: null })
  ownerInfo: Owner;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
