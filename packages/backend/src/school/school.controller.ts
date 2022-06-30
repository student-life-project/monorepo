import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AddressService } from '../address/address.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolService } from './school.service';

@ApiTags('school')
@Controller('school')
export class SchoolController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly schoolService: SchoolService,
    private readonly addressService: AddressService,
  ) {}

  // @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'School creation just for admins' })
  @Post()
  async create(@Body() createSchoolDto: CreateSchoolDto) {
    const addressId = await this.addressService.create(createSchoolDto.address);
    // eslint-disable-next-line no-param-reassign
    // createSchoolDto.address = addressId;
    console.log(addressId);
    return this.schoolService.create(createSchoolDto);
  }

  @ApiOkResponse({ description: 'Find all the schools' })
  @Get()
  findAll() {
    return this.schoolService.findAll();
  }

  @ApiNotFoundResponse({ description: 'School does not exists' })
  @ApiOkResponse({ description: 'Get a school by id' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const school = await this.schoolService.findOne(id);
    if (!school) throw new NotFoundException('School does not exists');
    return school;
  }

  @ApiOkResponse({ description: 'Update a school and or it address by id' })
  @ApiNotFoundResponse({
    description: 'School does not exists, not able to Update',
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateschoolDto: UpdateSchoolDto,
  ) {
    const school = await this.schoolService.update(id, updateschoolDto);
    if (!school)
      throw new NotFoundException('School does not exists, not able to Update');
    if (updateschoolDto.address) {
      const addressUpdated = await this.addressService.update(
        // eslint-disable-next-line no-underscore-dangle
        updateschoolDto.address._id,
        updateschoolDto.address,
      );
      if (addressUpdated) school.address = addressUpdated;
    }
    return school;
  }

  @ApiOkResponse({ description: 'Delete a school by id' })
  @ApiNotFoundResponse({ description: 'School does not exists' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const school = await this.schoolService.remove(id);
    if (!school) throw new NotFoundException('School does not exists');
    return school;
  }
}
