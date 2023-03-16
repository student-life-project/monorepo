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

  async createImage(
    imageData: CreateImageDto & { owner: string },
  ): Promise<ImageDocument> {
    const createdImage = await this.ImageModel.create(imageData);

    return createdImage;
  }

  async createMany(createImageDto: CreateImageDto[]): Promise<Image[]> {
    const createImages = await this.ImageModel.insertMany(createImageDto);
    return createImages;
  }

  async findAll(): Promise<Image[]> {
    return this.ImageModel.find().exec();
  }

  async deleteById(id: string | string[]) {
    const idList = Array.isArray(id) ? id : [id];
    return this.ImageModel.deleteMany({ _id: { $in: idList } });
  }

  async deleteByPlaceId(id: string) {
    return this.ImageModel.deleteMany({ placeId: id, rentalPlace: id });
  }

  async findByPlaceId(placeId: string): Promise<Image[]> {
    return this.ImageModel.find({ placeId, rentalPlace: placeId });
  }

  async findByOwner(ownerId: string): Promise<ImageDocument | null> {
    return this.ImageModel.findOne({ owner: ownerId });
  }
}
