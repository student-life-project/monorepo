import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Address, AddressSchema } from './address.schema';
import { AddressService } from './address.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Address.name, schema: AddressSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Address.name, schema: AddressSchema }]),
  ],
  controllers: [],
  providers: [AddressService],
})
export class AddressModule {}
