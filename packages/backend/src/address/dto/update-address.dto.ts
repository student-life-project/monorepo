import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  postalCode: string;

  @ApiProperty()
  country: string;
}
