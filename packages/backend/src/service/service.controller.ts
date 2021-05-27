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

import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceService } from './service.service';

@ApiTags('service')
@Controller('service')
export class ServiceController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly serviceService: ServiceService) {}

  // @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'Service creation just for admins' })
  @Post()
  async create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @ApiOkResponse({ description: 'Find all the services' })
  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @ApiNotFoundResponse({ description: 'Service does not exists' })
  @ApiOkResponse({ description: 'Get a service by id' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const service = await this.serviceService.findOne(id);
    if (!service) throw new NotFoundException('Service does not exists');
    return service;
  }

  @ApiOkResponse({ description: 'Update a service and or it address by id' })
  @ApiNotFoundResponse({
    description: 'Service does not exists, not able to Update',
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateserviceDto: UpdateServiceDto,
  ) {
    const service = await this.serviceService.update(id, updateserviceDto);
    if (!service)
      throw new NotFoundException(
        'Service does not exists, not able to Update',
      );
    return service;
  }

  @ApiOkResponse({ description: 'Delete a service by id' })
  @ApiNotFoundResponse({ description: 'Service does not exists' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const service = await this.serviceService.remove(id);
    if (!service) throw new NotFoundException('Service does not exists');
    return service;
  }
}
