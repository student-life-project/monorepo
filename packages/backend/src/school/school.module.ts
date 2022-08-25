import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AddressModule } from '../address/address.module';
import { AddressService } from '../address/address.service';
import { UserService } from '../user/user.service';
import { SchoolController } from './school.controller';
import { School, SchoolSchema } from './school.schema';
import { SchoolService } from './school.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }]),
    AddressModule,
    HttpModule,
  ],
  exports: [
    MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }]),
  ],
  controllers: [SchoolController],
  providers: [SchoolService, AddressService, UserService],
})
export class SchoolModule {}
