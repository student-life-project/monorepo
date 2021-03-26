import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Characteristic, CharacteristicSchema } from './characteristic.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Characteristic.name, schema: CharacteristicSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeature([
      { name: Characteristic.name, schema: CharacteristicSchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class CharactetiristicModule {}
