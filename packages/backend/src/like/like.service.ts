import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  RentalPlace,
  RentalPlaceDocument,
} from '../rental-place/rental-place.schema';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
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

  private readonly populateQuery = ['ownerId', 'placeId'];

  createMany(createLikeDtoArray: CreateLikeDto[]): Promise<Like[]> {
    return this.LikeModel.insertMany(createLikeDtoArray);
  }

  create(createLikeDto: CreateLikeDto): Promise<Like> {
    return this.LikeModel.create(createLikeDto);
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

  async deleteById(id: string) {
    return this.LikeModel.findByIdAndDelete(id);
  }

  async count(id: any) {
    return this.LikeModel.find({ placeId: id }).countDocuments().exec();
  }

  async getByRentalPlaceId(placeId: string): Promise<LikeDocument[]> {
    return this.LikeModel.find({ placeId }).populate(this.populateQuery);
  }

  async getByOwnerId(ownerId: string): Promise<LikeDocument[]> {
    return this.LikeModel.find({ ownerId }).populate(this.populateQuery);
  }

  async getByLikeId(id: string) {
    return this.LikeModel.findById(id).populate(this.populateQuery);
  }

  async getByOwnerIdAndPlaceId(placeId: string, ownerId: string) {
    return this.LikeModel.find({ ownerId, placeId }).populate(
      this.populateQuery,
    );
  }

  async updateLikeById(id: string, updatedData: UpdateLikeDto) {
    const like = await this.LikeModel.findById(id);
    if (like?.liked && like?.ownerId && like.placeId && like?.type) {
      like.liked = updatedData.liked;
      like.ownerId = updatedData.ownerId;
      like.placeId = updatedData.placeId;
      like.type = updatedData.type;
    }

    const updatedLike = await like?.save();

    return updatedLike;
  }
}
