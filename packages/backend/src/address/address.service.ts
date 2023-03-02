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
    return this.AddressModel.findOneAndUpdate({ _id: id }, updateSchoolDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.AddressModel.findByIdAndDelete(id);
  }

  async deleteByPlaceId(id: string) {
    return this.AddressModel.deleteMany({ placeId: id });
  }

  async deleteByOwnerId(id: string) {
    return this.AddressModel.deleteMany({ ownerId: id });
  }

  async createMany(createAddressDto: CreateAddressDto[]): Promise<Address[]> {
    const createdAddresses = await this.AddressModel.insertMany(
      createAddressDto,
    );
    return createdAddresses;
  }
}
