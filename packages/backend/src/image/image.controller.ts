import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ImageService } from './image.service';

@Controller('image')
@ApiTags('image')
export class ImageController {
  constructor(
    @Inject(ImageService.name) private readonly imageService: ImageService,
  ) {}

  @Get()
  sayHello() {
    return this.imageService.findAll();
  }
}
