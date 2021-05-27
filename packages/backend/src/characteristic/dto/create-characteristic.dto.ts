import { ApiProperty } from '@nestjs/swagger';

export class CreateCharacteristicDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: string;
}
