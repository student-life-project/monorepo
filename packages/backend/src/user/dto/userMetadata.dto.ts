import { ApiProperty } from '@nestjs/swagger';

export class UserMetadataDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  birthday: string;
}
