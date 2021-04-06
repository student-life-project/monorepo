import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Rate, RateSchema } from './rate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rate.name, schema: RateSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Rate.name, schema: RateSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class RateModule {}
