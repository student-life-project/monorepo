import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  RentalPlace,
  RentalPlaceDocument,
} from '../rental-place/rental-place.schema';
import { CreateLikeDto } from './dto/create-like.dto';
import { Like, LikeDocument } from './like.schema';

@Injectable()
export class LikeService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Like.name)
    private LikeModel: Model<LikeDocument>,
    @InjectModel(RentalPlace.name)
    private RentalPlaceModel: Model<RentalPlaceDocument>,
  ) {}

  async createMany(createImageDto: CreateLikeDto[]): Promise<Like[]> {
    const createdLike = await this.LikeModel.insertMany(createImageDto);
    return createdLike;
  }

  async deleteByPlaceId(id: string) {
    const rentalPlacefinded =
      (await this.RentalPlaceModel.findById(id)) || undefined;

    if (!rentalPlacefinded)
      return {
        deletedCount: 0,
      };

    const deletedOnes = await this.LikeModel.deleteMany({
      placeId: rentalPlacefinded.id,
    });

    return deletedOnes;
  }

  async deleteByOwnerId(id: string) {
    return this.LikeModel.deleteMany({ ownerId: id });
  }

  // TODO: delete by owner and place
  async deleteById(id: string) {
    return this.LikeModel.findByIdAndDelete(id);
  }

  async count(id: any) {
    return this.LikeModel.find({ placeId: id }).count().exec();
  }
}
