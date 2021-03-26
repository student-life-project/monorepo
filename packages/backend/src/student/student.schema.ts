import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { RentalPlace } from '../rental-place/rental-place.schema';
import { School } from '../school/school.schema';

@Schema()
export class Student {
  @Prop({ required: true })
  studentNumber: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'School', required: true })
  school: School;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'RentalPlace',
    required: true,
  })
  rentalPlace: RentalPlace;
}

export type StudentDocument = Student & Document;

export const StudentSchema = SchemaFactory.createForClass(Student);
