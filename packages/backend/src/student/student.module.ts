import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RentalPlaceModule } from '../rental-place/rental-place.module';
import { SchoolModule } from '../school/school.module';
import { Student, StudentSchema } from './student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    SchoolModule,
    RentalPlaceModule,
  ],
  exports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class StudentModule {}
