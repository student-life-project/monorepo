import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CharacteristicController } from './characteristic.controller';
import { Characteristic, CharacteristicSchema } from './characteristic.schema';
import { CharacteristicService } from './characteristic.service';

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
  controllers: [CharacteristicController],
  providers: [CharacteristicService],
})
export class CharacteristicModule {}
