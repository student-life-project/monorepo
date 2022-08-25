import { ApiProperty } from '@nestjs/swagger';
import { ERateType } from '@student_life/common';

import { CreateRentalPlaceDto } from '../../rental-place/dto/create-rental-place.dto';

export class CreateLikeDto {
  @ApiProperty({
    example: ERateType.PLACE,
    enum: ERateType,
  })
  type: ERateType;

  @ApiProperty({})
  placeId: CreateRentalPlaceDto;

  @ApiProperty({})
  ownerId: string;
}
