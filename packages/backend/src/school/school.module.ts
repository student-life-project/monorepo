import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AddressModule } from '../address/address.module';
import { AddressService } from '../address/address.service';
import { ImageModule } from '../image/image.module';
import { ImageService } from '../image/image.service';
import { PaginationModule } from '../pagination/pagination.module';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { SchoolController } from './school.controller';
import { School, SchoolSchema } from './school.schema';
import { SchoolService } from './school.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }]),
    AddressModule,
    HttpModule,
    UserModule,
    ImageModule,
    PaginationModule,
  ],
  exports: [
    MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }]),
  ],
  controllers: [SchoolController],
  providers: [SchoolService, AddressService, UserService, ImageService],
})
export class SchoolModule {}
