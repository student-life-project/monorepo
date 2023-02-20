import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

import { AddressService } from '../address/address.service';
import { Auth } from '../authz/auth.decorator';
import { UserService } from '../user/user.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './school.schema';
import { SchoolService } from './school.service';

@ApiTags('School')
@Controller('school')
export class SchoolController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly schoolService: SchoolService,
    private readonly addressService: AddressService,
    private readonly userService: UserService,
  ) {}

  @ApiCreatedResponse({
    description: 'School creation just for admins',
    type: School,
  })
  @Auth('create:school')
  @Post()
  async create(@Body() createSchoolDto: CreateSchoolDto, @Req() req: any) {
    console.log(createSchoolDto, this.userService.isAdmin(req.user));
    if (!this.userService.isAdmin(req.user)) {
      throw new UnauthorizedException();
    }
    await this.addressService.create(createSchoolDto.address);
    return this.schoolService.create(createSchoolDto);
  }

  @ApiOkResponse({
    description: 'Find all the schools',
    schema: {
      allOf: [
        {
          type: 'array',
          items: { $ref: getSchemaPath(School) },
        },
      ],
    },
  })
  @Get()
  findAll() {
    return this.schoolService.findAll();
  }

  @ApiNotFoundResponse({ description: 'School does not exists' })
  @ApiOkResponse({
    description: 'Get a school by id',
    type: School,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const school = await this.schoolService.findOne(id);
    if (!school) throw new NotFoundException('School does not exists');
    return school;
  }

  @ApiOkResponse({
    description: 'Update a school and or it address by id',
    type: School,
  })
  @ApiNotFoundResponse({
    description: 'School does not exists, not able to Update',
  })
  @Auth('update:school')
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateschoolDto: UpdateSchoolDto,
    @Req() req: any,
  ) {
    if (!this.userService.isAdmin(req.user)) {
      throw new UnauthorizedException();
    }
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
  @Auth('delete:school')
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: any) {
    if (!this.userService.isAdmin(req.user)) {
      throw new UnauthorizedException();
    }
    const school = await this.schoolService.remove(id);
    if (!school) throw new NotFoundException('School does not exists');
    return school;
  }
}
