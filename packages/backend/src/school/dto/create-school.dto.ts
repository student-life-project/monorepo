import { ApiProperty } from '@nestjs/swagger';

import { CreateAddressDto } from '../../address/dto/create-address.dto';

export class CreateSchoolDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: CreateAddressDto;
}
