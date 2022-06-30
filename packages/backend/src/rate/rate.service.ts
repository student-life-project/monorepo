import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateRateDto } from './dto/create-rate.dto';
import { Rate, RateDocument } from './rate.schema';

@Injectable()
export class RateService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Rate.name)
    private RateModel: Model<RateDocument>,
  ) {}

  async createMany(createImageDto: CreateRateDto[]): Promise<Rate[]> {
    const createdRate = await this.RateModel.insertMany(createImageDto);
    return createdRate;
  }

  async deleteByPlaceId(id: string) {
    return this.RateModel.deleteMany({ placeId: id });
  }

  async deleteByOwnerId(id: string) {
    return this.RateModel.deleteMany({ ownerId: id });
  }
}
