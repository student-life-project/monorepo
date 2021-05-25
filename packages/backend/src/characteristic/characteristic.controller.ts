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

import { CharacteristicService } from './characteristic.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';
@ApiTags('characteristic')
@Controller('characteristic')
export class CharacteristicController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly characteristicService: CharacteristicService) {}

  // @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'Service creation just for admins' })
  @Post()
  async create(@Body() createServiceDto: CreateCharacteristicDto) {
    return this.characteristicService.create(createServiceDto);
  }

  @ApiOkResponse({ description: 'Find all the characteristics' })
  @Get()
  findAll() {
    return this.characteristicService.findAll();
  }

  @ApiNotFoundResponse({ description: 'Service does not exists' })
  @ApiOkResponse({ description: 'Get a characteristic by id' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const characteristic = await this.characteristicService.findOne(id);
    if (!characteristic) throw new NotFoundException('Service does not exists');
    return characteristic;
  }

  @ApiOkResponse({
    description: 'Update a characteristic and or it address by id',
  })
  @ApiNotFoundResponse({
    description: 'Service does not exists, not able to Update',
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCharacteristicDto: UpdateCharacteristicDto,
  ) {
    const characteristic = await this.characteristicService.update(
      id,
      updateCharacteristicDto,
    );
    if (!characteristic)
      throw new NotFoundException(
        'Service does not exists, not able to Update',
      );
    return characteristic;
  }

  @ApiOkResponse({ description: 'Delete a characteristic by id' })
  @ApiNotFoundResponse({ description: 'Service does not exists' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const characteristic = await this.characteristicService.remove(id);
    if (!characteristic) throw new NotFoundException('Service does not exists');
    return characteristic;
  }
}
