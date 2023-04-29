import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageModule } from '../image/image.module';
import { ImageService } from '../image/image.service';
import { PaginationModule } from '../pagination/pagination.module';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { ReportController } from './report.controller';
import { Report, ReportSchema } from './report.schema';
import { ReportService } from './report.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
    PaginationModule,
    HttpModule,
    UserModule,
    ImageModule,
  ],
  exports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
  ],
  providers: [ReportService, UserService, ImageService],
  controllers: [ReportController],
})
export class ReportModule {}
