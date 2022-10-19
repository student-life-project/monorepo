import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPagination, IPaginationParams } from '@student_life/common/dist';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';

import { removeFile } from '../config/multer.config';
import { Image } from '../image/image.schema';
import { PaginationMoogooseService } from '../pagination/Pagination.service';
import { CreateRentalPlaceDto } from './dto/create-rental-place.dto';
import { UpdateRentalPlaceDto } from './dto/update-rental-place.dto';
import { RentalPlace, RentalPlaceDocument } from './rental-place.schema';

@Injectable()
export class RentalPlaceService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(RentalPlace.name)
    private RentalPlaceModel: Model<RentalPlaceDocument>,
    @Inject(PaginationMoogooseService)
    private paginationService: PaginationMoogooseService<RentalPlace>,
  ) {}

  private readonly populateQuery = ['likes', 'images', 'address', 'reports'];

  async create(
    createRentalPlaceDto: CreateRentalPlaceDto,
  ): Promise<RentalPlace> {
    const createdRentalPlace = new this.RentalPlaceModel(createRentalPlaceDto);
    return createdRentalPlace.save();
  }

  async update(id: string, updateRentalPlaceDto: UpdateRentalPlaceDto) {
    return this.RentalPlaceModel.findByIdAndUpdate(
      id,
      updateRentalPlaceDto as unknown as UpdateQuery<RentalPlaceDocument>,
      {
        upsert: true,
      },
    );
  }

  async pushComment(id: string, comment: any) {
    const rentalPlace = await this.findById(id);
    rentalPlace?.comments?.push(comment);
    rentalPlace?.save(); // check if works like this or need to save on push
  }

  async pushLike(id: string, like: any) {
    const rentalPlace = await this.findById(id);
    rentalPlace?.likes?.push(like);
    rentalPlace?.save(); // check if works like this or need to save on push
  }

  async pushReport(id: string, report: any) {
    const rentalPlace = await this.findById(id);
    rentalPlace?.reports?.push(report);
    rentalPlace?.save(); // check if works like this or need to save on push
  }

  async approve(id: string, approve: boolean) {
    return this.RentalPlaceModel.findByIdAndUpdate(id, { approved: approve });
  }

  async availability(id: string, availability: boolean) {
    return this.RentalPlaceModel.findByIdAndUpdate(id, {
      availability,
    }); // check if need to be changed by { availability: availability }
  }

  async findNotApproved(): Promise<RentalPlace[]> {
    return this.RentalPlaceModel.find({ approved: false }).exec();
  }

  async findById(id: string): Promise<RentalPlaceDocument | null> {
    return this.RentalPlaceModel.findById(id)
      .populate(this.populateQuery)
      .exec();
  }

  async findAll(): Promise<RentalPlace[]> {
    return this.RentalPlaceModel.find().populate(this.populateQuery).exec();
  }

  async findbyId(id: string): Promise<RentalPlace | null> {
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

  async find(
    query: FilterQuery<RentalPlaceDocument>,
    paginationParams: IPaginationParams = {},
  ): Promise<IPagination<RentalPlace>> {
    const { dataQuery: rentalsFindedQuery, ...paginationData } =
      await this.paginationService.paginate(
        this.RentalPlaceModel,
        paginationParams,
        query,
      );

    const rentalsFinded = await rentalsFindedQuery.populate(this.populateQuery);
    // .populate('characteristics')
    // .populate('rules')
    // .populate('security')
    // .populate('service');

    return {
      data: rentalsFinded,
      ...paginationData,
    };
  }

  async count(query: any) {
    return this.RentalPlaceModel.countDocuments(query).exec();
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
