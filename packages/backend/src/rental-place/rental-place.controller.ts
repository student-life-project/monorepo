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
import { ImageService } from '../image/image.service';
// import { RateService } from '../rate/rate.service';
import { RuleService } from '../rule/rule.service';
import { CreateRentalPlaceDto } from './dto/create-rental-place.dto';
import { UpdateRentalPlaceDto } from './dto/update-rental-place.dto';
import { RentalPlaceService } from './rental-place.service';

@ApiTags('rental-place')
@Controller('rental-place')
export class RentalPlaceController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly rentalPlaceService: RentalPlaceService,
    private readonly addressService: AddressService,
    private readonly ruleService: RuleService,
    private readonly imageService: ImageService, // private readonly rateService: RateService,
  ) {}

  // @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'Rental place creation just for admins or lessors',
  })
  @Post()
  async create(@Body() createRentalPlaceDto: CreateRentalPlaceDto) {
    // TODO confirm rental-place/ POST works
    // create rules
    const rulesIds = await this.ruleService.createMany(
      createRentalPlaceDto.rules,
    );
    // eslint-disable-next-line no-param-reassign
    createRentalPlaceDto.rules = rulesIds;

    // create images
    const imagesIds = await this.imageService.createMany(
      createRentalPlaceDto.images,
    );
    // eslint-disable-next-line no-param-reassign
    createRentalPlaceDto.images = imagesIds;

    // create address
    const addressId = await this.addressService.create(
      createRentalPlaceDto.address,
    );
    // eslint-disable-next-line no-param-reassign
    createRentalPlaceDto.address = addressId;

    // create rentalPlace
    return this.rentalPlaceService.create(createRentalPlaceDto);
  }

  @ApiOkResponse({ description: 'Find all the rental places' })
  @Get()
  findAll() {
    // TODO make sure retrive all need info rentals GET check if made TOP RATE AND MOST COMMENTED limit to 5 ¡¡DISPONIBLES!! (si todos igual random entre los top on different request
    return this.rentalPlaceService.findAll();
  }

  @ApiNotFoundResponse({ description: 'Rental place does not exists' })
  @ApiOkResponse({ description: 'Get a rental place by id' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    // TODO make sure retrive all need info rentals/:id GET
    const rentalPlace = await this.rentalPlaceService.findOne(id);
    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');
    return rentalPlace;
  }

  @ApiOkResponse({
    description: 'Update a rental place',
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRentalPlaceDto: UpdateRentalPlaceDto,
  ) {
    const rentalPlace = await this.rentalPlaceService.update(
      id,
      updateRentalPlaceDto,
    );
    if (!rentalPlace)
      throw new NotFoundException(
        'Rental Place does not exists, not able to Update',
      );
    return rentalPlace;
  }

  @ApiOkResponse({ description: 'Delete a rental place by id' })
  @ApiNotFoundResponse({ description: 'Rental place does not exists' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const rentalPlace = await this.rentalPlaceService.remove(id);
    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');
    return rentalPlace;
  }
}
