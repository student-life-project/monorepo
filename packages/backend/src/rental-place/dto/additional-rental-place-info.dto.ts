import { ApiProperty } from '@nestjs/swagger';

export class AdditionalRentalPlaceInfoDto {
  @ApiProperty({ example: true })
  availability: boolean;
}
