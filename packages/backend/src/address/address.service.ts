import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Address, AddressDocument } from './address.schema';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Address.name) private AddressModel: Model<AddressDocument>,
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const createdAddress = new this.AddressModel(createAddressDto);
    return createdAddress.save();
  }

  async update(id: string, updateSchoolDto: UpdateAddressDto) {
    return this.AddressModel.findByIdAndUpdate(id, updateSchoolDto, {
      new: true,
    });
  }
}
