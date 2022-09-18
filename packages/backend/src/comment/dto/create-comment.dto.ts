import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { CreateRentalPlaceDto } from '../../rental-place/dto/create-rental-place.dto';

export class CreateCommentDto {
  @ApiProperty()
  comment: string;

  @ApiPropertyOptional({})
  placeId: CreateRentalPlaceDto;

  @ApiPropertyOptional({})
  ownerId: string;
}
