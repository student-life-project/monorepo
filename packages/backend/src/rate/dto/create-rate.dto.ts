import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ERateType } from '@student_life/common';

export class CreateRateDto {
  @ApiProperty({
    example: 4,
    minimum: 1,
    maximum: 5,
  })
  score: number;

  @ApiProperty({
    example: ERateType.PLACE,
    enum: ERateType,
  })
  type: ERateType;

  @ApiPropertyOptional({})
  placeId?: string;

  @ApiPropertyOptional({})
  ownerId?: string;
}
