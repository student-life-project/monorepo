import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service, ServiceDocument } from './service.schema';

@Injectable()
export class ServiceService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Service.name) private ServiceModel: Model<ServiceDocument>,
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const createdService = new this.ServiceModel(createServiceDto);
    return createdService.save();
  }

  async findAll(query: FilterQuery<ServiceDocument> = {}): Promise<Service[]> {
    return this.ServiceModel.find(query).exec();
  }

  async findOne(id: string): Promise<Service | null> {
    return this.ServiceModel.findById(id);
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    return this.ServiceModel.findByIdAndUpdate(id, updateServiceDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.ServiceModel.findByIdAndDelete(id);
  }
}
