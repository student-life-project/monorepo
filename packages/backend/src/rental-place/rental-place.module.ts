import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AddressModule } from '../address/address.module';
import { CharactetiristicModule } from '../charactetiristic/charactetiristic.module';
import { ImageModule } from '../image/image.module';
import { RateModule } from '../rate/rate.module';
import { RuleModule } from '../rule/rule.module';
import { ServiceModule } from '../service/service.module';
import { RentalPlace, RentalPlaceSchema } from './rental-place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RentalPlace.name, schema: RentalPlaceSchema },
    ]),
    AddressModule,
    ServiceModule,
    CharactetiristicModule,
    RuleModule,
    ImageModule,
    RateModule,
  ],
  exports: [
    MongooseModule.forFeature([
      { name: RentalPlace.name, schema: RentalPlaceSchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class RentalPlaceModule {}
