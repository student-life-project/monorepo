import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import {
  Characteristic,
  CharacteristicDocument,
} from './characteristic.schema';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';

@Injectable()
export class CharacteristicService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Characteristic.name)
    private CharacteristicModel: Model<CharacteristicDocument>,
  ) {}

  async create(
    createCharacteristicDto: CreateCharacteristicDto,
  ): Promise<Characteristic> {
    const createdCharacteristic = new this.CharacteristicModel(
      createCharacteristicDto,
    );
    return createdCharacteristic.save();
  }

  async findAll(
    query: FilterQuery<CharacteristicDocument> = {},
  ): Promise<Characteristic[]> {
    return this.CharacteristicModel.find(query).exec();
  }

  async findOne(id: string): Promise<Characteristic | null> {
    return this.CharacteristicModel.findById(id);
  }

  async update(id: string, updateCharacteristicDto: UpdateCharacteristicDto) {
    return this.CharacteristicModel.findByIdAndUpdate(
      id,
      updateCharacteristicDto,
      {
        new: true,
      },
    );
  }

  async remove(id: string) {
    return this.CharacteristicModel.findByIdAndDelete(id);
  }
}
