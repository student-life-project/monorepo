import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School, SchoolDocument } from './school.schema';

@Injectable()
export class SchoolService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(School.name) private SchoolModel: Model<SchoolDocument>,
  ) {}

  async create(createSchoolDto: CreateSchoolDto): Promise<School> {
    const createdSchool = new this.SchoolModel(createSchoolDto);
    return createdSchool.save();
  }

  async findAll(): Promise<School[]> {
    return this.SchoolModel.find().populate('address').exec();
  }

  async findOne(id: string): Promise<School | null> {
    return this.SchoolModel.findById(id).populate('address');
  }

  async update(id: string, updateSchoolDto: UpdateSchoolDto) {
    return this.SchoolModel.findByIdAndUpdate(id, updateSchoolDto, {
      new: true,
    }).populate('address');
  }

  async remove(id: string) {
    return this.SchoolModel.findByIdAndDelete(id);
  }
}
