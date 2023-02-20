import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageModule } from '../image/image.module';
import { ImageService } from '../image/image.service';
import { UserController } from './user.controller';
// import { MessageModule } from '../message/message.module';
// import { OwnerModule } from '../owner/owner.module';
// import { ReportModule } from '../report/report.module';
// import { StudentModule } from '../student/student.module';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ImageModule,
    // MessageModule,
    // OwnerModule,
    // ReportModule,
    // StudentModule,
    HttpModule,
  ],
  exports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, ImageService],
})
export class UserModule {}
