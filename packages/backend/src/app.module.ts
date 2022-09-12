import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { AddressModule } from './address/address.module';
// import { AddressService } from './address/address.service';
import { AuthzModule } from './authz/authz.module';
import { CommentModule } from './comment/comment.module';
import { ImageModule } from './image/image.module';
import { LikeModule } from './like/like.module';
import { MongooseConfigModule } from './mongoose-config/mongoose-config.module';
import { OwnerModule } from './owner/owner.module';
// import { RentalPlaceCommand } from './rental-place/rental-place.command';
import { RentalPlaceModule } from './rental-place/rental-place.module';
// import { RentalPlaceService } from './rental-place/rental-place.service';
import { ReportModule } from './report/report.module';
import { SchoolModule } from './school/school.module';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

if (process.env.NODE_ENV !== 'PROD') {
  require('dotenv').config();
}

@Module({
  imports: [
    LikeModule,
    UserModule,
    OwnerModule,
    StudentModule,
    ImageModule,
    ReportModule,
    RentalPlaceModule,
    SchoolModule,
    AddressModule,
    MongooseConfigModule,
    AuthzModule,
    CommentModule,
    CommandModule,
  ],
  // controllers: [AppController],
  // providers: [RentalPlaceCommand, RentalPlaceService, AddressService],
})
export class AppModule {}
