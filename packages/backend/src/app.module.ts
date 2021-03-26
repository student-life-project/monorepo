import { Module } from '@nestjs/common';

import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactetiristicModule } from './charactetiristic/charactetiristic.module';
import { ImageModule } from './image/image.module';
import { MessageModule } from './message/message.module';
import { MongooseConfigModule } from './mongoose-config/mongoose-config.module';
import { OwnerModule } from './owner/owner.module';
import { RateModule } from './rate/rate.module';
import { RentalPlaceModule } from './rental-place/rental-place.module';
import { ReportModule } from './report/report.module';
import { RuleModule } from './rule/rule.module';
import { SchoolModule } from './school/school.module';
import { ServiceModule } from './service/service.module';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

if (process.env.NODE_ENV !== 'PROD') {
  require('dotenv').config();
}

@Module({
  imports: [
    MessageModule,
    RateModule,
    UserModule,
    OwnerModule,
    StudentModule,
    ImageModule,
    ReportModule,
    RentalPlaceModule,
    SchoolModule,
    AddressModule,
    RuleModule,
    ServiceModule,
    CharactetiristicModule,
    MongooseConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
