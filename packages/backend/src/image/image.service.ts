import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateImageDto } from './dto/create-image.dto';
// import { UpdateImageDto } from './dto/update-image.dto';
import { Image, ImageDocument } from './image.schema';

@Injectable()
export class ImageService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Image.name)
    private ImageModel: Model<ImageDocument>,
  ) {}

  async createMany(createImageDto: CreateImageDto[]): Promise<Image[]> {
    const createImages = await this.ImageModel.insertMany(createImageDto);
    return createImages;
  }

  async findAll(): Promise<Image[]> {
    return this.ImageModel.find().exec();
  }

  async deleteByPlaceId(id: string) {
    return this.ImageModel.deleteMany({ placeId: id });
  }
}
