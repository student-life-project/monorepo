import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateRentalPlaceDto } from './dto/create-rental-place.dto';
import { UpdateRentalPlaceDto } from './dto/update-rental-place.dto';
import { RentalPlace, RentalPlaceDocument } from './rental-place.schema';
@Injectable()
export class RentalPlaceService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(RentalPlace.name)
    private RentalPlaceModel: Model<RentalPlaceDocument>,
  ) {}

  private readonly populateQuery = [
    'scores',
    'images',
    'rules',
    'characteristics',
    'service',
    'address',
  ];

  async create(
    createRentalPlaceDto: CreateRentalPlaceDto,
  ): Promise<RentalPlace> {
    const createdRentalPlace = new this.RentalPlaceModel(createRentalPlaceDto);
    return createdRentalPlace.save();
  }

  async findAll(): Promise<RentalPlace[]> {
    return this.RentalPlaceModel.find().populate(this.populateQuery).exec();
  }

  async findOne(id: string): Promise<RentalPlace | null> {
    return this.RentalPlaceModel.findById(id).populate(this.populateQuery);
  }

  async update(id: string, updateRentalPlaceDto: UpdateRentalPlaceDto) {
    return this.RentalPlaceModel.findByIdAndUpdate(id, updateRentalPlaceDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.RentalPlaceModel.findByIdAndDelete(id);
  }
}
