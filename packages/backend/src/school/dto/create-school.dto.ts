import { ApiProperty } from '@nestjs/swagger';

import { CreateAddressDto } from '../../address/dto/create-address.dto';

export class CreateSchoolDto {
  @ApiProperty({
    example: 'Centro Universitario de Ciencias Exactas e Ingenierías',
  })
  name: string;

  @ApiProperty()
  address: CreateAddressDto;
}
