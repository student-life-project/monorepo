import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AddressModule } from '../address/address.module';
import { AddressService } from '../address/address.service';
import { CharacteristicModule } from '../characteristic/characteristic.module';
import { CharacteristicService } from '../characteristic/characteristic.service';
import { CommentModule } from '../comment/comment.module';
import { CommentService } from '../comment/comment.service';
import { ImageModule } from '../image/image.module';
import { ImageService } from '../image/image.service';
import { LikeModule } from '../like/like.module';
import { LikeService } from '../like/like.service';
import { PaginationModule } from '../pagination/pagination.module';
import { RuleModule } from '../rule/rule.module';
import { RuleService } from '../rule/rule.service';
import { ServiceModule } from '../service/service.module';
import { ServiceService } from '../service/service.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { RentalPlaceController } from './rental-place.controller';
import { RentalPlace, RentalPlaceSchema } from './rental-place.schema';
import { RentalPlaceService } from './rental-place.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RentalPlace.name, schema: RentalPlaceSchema },
    ]),
    AddressModule,
    ImageModule,
    LikeModule,
    CommentModule,
    UserModule,
    HttpModule,
    PaginationModule,
    CharacteristicModule,
    RuleModule,
    ServiceModule,
  ],
  exports: [
    MongooseModule.forFeature([
      { name: RentalPlace.name, schema: RentalPlaceSchema },
    ]),
  ],
  controllers: [RentalPlaceController],
  providers: [
    RentalPlaceService,
    AddressService,
    ImageService,
    CommentService,
    UserService,
    LikeService,
    CharacteristicService,
    RuleService,
    ServiceService,
  ],
})
export class RentalPlaceModule {}
