import { ApiProperty } from '@nestjs/swagger';
import { ERateType } from '@student_life/common';

export class CreateLikeDto {
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
