import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AddressModule } from '../address/address.module';
import { AddressService } from '../address/address.service';
import { CharacteristicModule } from '../characteristic/characteristic.module';
import { ImageModule } from '../image/image.module';
import { ImageService } from '../image/image.service';
import { RateModule } from '../rate/rate.module';
// import { RateService } from '../rate/rate.service';
import { RuleModule } from '../rule/rule.module';
import { RuleService } from '../rule/rule.service';
import { ServiceModule } from '../service/service.module';
import { RentalPlaceController } from './rental-place.controller';
import { RentalPlace, RentalPlaceSchema } from './rental-place.schema';
import { RentalPlaceService } from './rental-place.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RentalPlace.name, schema: RentalPlaceSchema },
    ]),
    AddressModule,
    ServiceModule,
    CharacteristicModule,
    RuleModule,
    ImageModule,
    RateModule,
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
    RuleService,
    ImageService,
    // RateService,
  ],
})
export class RentalPlaceModule {}
