import { ApiProperty } from '@nestjs/swagger';

import { UpdateAddressDto } from '../../address/dto/update-address.dto';

export class UpdateSchoolDto {
  @ApiProperty({
    example: 'Centro Universitario de Ciencias Exactas e Ingenierías',
  })
  name: string;

  @ApiProperty()
  address: UpdateAddressDto;
}
