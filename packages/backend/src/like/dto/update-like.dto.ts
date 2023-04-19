import { ApiProperty } from '@nestjs/swagger';
import { ERateType } from '@student_life/common';

export class UpdateLikeDto {
  @ApiProperty({})
  _id: string;

  @ApiProperty({
    example: ERateType.PLACE,
    enum: ERateType,
  })
  type: ERateType;

  @ApiProperty({})
  placeId: string;

  @ApiProperty({})
  ownerId: string;

  @ApiProperty({ default: false })
  liked?: boolean;
}
