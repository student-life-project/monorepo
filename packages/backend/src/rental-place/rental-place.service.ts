import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { removeFile } from '../config/multer.config';
import { Image } from '../image/image.schema';
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

  private readonly populateQuery = ['likes', 'images', 'address'];

  async create(
    createRentalPlaceDto: CreateRentalPlaceDto,
  ): Promise<RentalPlace> {
    const createdRentalPlace = new this.RentalPlaceModel(createRentalPlaceDto);
    return createdRentalPlace.save();
  }

  async update(id: string, updateRentalPlaceDto: UpdateRentalPlaceDto) {
    return this.RentalPlaceModel.findByIdAndUpdate(id, updateRentalPlaceDto, {
      upsert: true,
    });
  }

  async findAll(): Promise<RentalPlace[]> {
    return this.RentalPlaceModel.find().populate(this.populateQuery).exec();
  }

  async findOne(id: string): Promise<RentalPlace | null> {
    return this.RentalPlaceModel.findById(id).populate(this.populateQuery);
  }

  // TODO: fix
  async findByOwner(id: string): Promise<RentalPlace[]> {
    return this.RentalPlaceModel.find({ owner: id }).exec();
  }

  removeFiles(files: Express.Multer.File[] | Image[]) {
    files.map((file: Express.Multer.File | Image) => removeFile(file.filename));
  }

  async remove(id: string) {
    return this.RentalPlaceModel.findByIdAndDelete(id);
  }

  async approved() {
    return this.RentalPlaceModel.find({}).where('approved').equals(true);
  }

  async find(query: any, sort: any, paginate: any): Promise<RentalPlace[]> {
    const INIT_PAGE = 1;
    const q = this.RentalPlaceModel.find(query);

    if (sort) {
      q.sort(sort);
    }

    if (paginate) {
      q.skip((paginate.page - INIT_PAGE) * paginate.limit).limit(
        paginate.limit,
      );
    }

    return q.populate(this.populateQuery).exec();
  }

  async count(query: any) {
    return this.RentalPlaceModel.count(query).exec();
  }

  // TODO filters and sort
  // ?Sort=asc/desc (price)
  sort(sorting: string) {
    return { sort: { price: sorting } };
  }

  // ?type=[]
  // ?services=[”Lavadora”,,,,,]
  // ?rules=
  // ?from=
  // ?limit=
  // ?price=”less than x”/”more than x”/”between x and y”
  getPriceFilters(price: string) {
    const BETWEEN_SPLIT_COUNT = 4;
    const THAN_SPLIT_COUNT = 3;
    const BETWEEN_X_INDEX = 1;
    const BETWEEN_Y_INDEX = 3;
    const THAN_CRITERIA_INDEX = 0;
    const THAN_VALUE_INDEX = 2;

    const priceType = price.split(' ');
    const typeLength = priceType.length;
    console.log('priceType', priceType);
    console.log('typeLength', typeLength);

    if (typeLength !== THAN_SPLIT_COUNT && typeLength !== BETWEEN_SPLIT_COUNT) {
      return {};
    }

    if (typeLength === BETWEEN_SPLIT_COUNT) {
      return {
        $lte: priceType[BETWEEN_X_INDEX],
        $gte: priceType[BETWEEN_Y_INDEX],
      };
    }

    if (priceType[THAN_CRITERIA_INDEX] === 'less') {
      return { $lte: priceType[THAN_VALUE_INDEX] };
    }
    if (priceType[THAN_CRITERIA_INDEX] === 'more') {
      return { $gte: priceType[THAN_VALUE_INDEX] };
    }
    return {};
  }

  priceFilter(query: any, price: string) {
    const priceCriteria = this.getPriceFilters(price);
    if (priceCriteria) {
      return { ...query, price: priceCriteria };
    }
    return query;
  }

  async createMany(
    createRentalPlaceDto: CreateRentalPlaceDto[],
  ): Promise<RentalPlace[]> {
    const createdRentalPlace = await this.RentalPlaceModel.insertMany(
      createRentalPlaceDto,
    );
    return createdRentalPlace;
  }
}
