import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RentalPlaceModule } from '../rental-place/rental-place.module';
import { Owner, OwnerSchema } from './owner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]),
    RentalPlaceModule,
  ],
  exports: [
    MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class OwnerModule {}
