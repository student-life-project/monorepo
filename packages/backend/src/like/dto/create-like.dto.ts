import { ApiProperty } from '@nestjs/swagger';
import { ERateType } from '@student_life/common';

import { RentalPlace } from '../../rental-place/rental-place.schema';

export class CreateLikeDto {
  @ApiProperty({
    example: ERateType.PLACE,
    enum: ERateType,
  })
  type: ERateType;

  @ApiProperty({})
  placeId: RentalPlace;

  @ApiProperty({})
  ownerId: string;
}
