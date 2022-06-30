import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AddressModule } from '../address/address.module';
import { AddressService } from '../address/address.service';
import { CharacteristicModule } from '../characteristic/characteristic.module';
import { ImageModule } from '../image/image.module';
import { ImageService } from '../image/image.service';
import { RateModule } from '../rate/rate.module';
import { RateService } from '../rate/rate.service';
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
    CharacteristicModule,
    ImageModule,
    RateModule,
    UserModule,
    HttpModule,
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
    UserService,
    RateService,
  ],
})
export class RentalPlaceModule {}
