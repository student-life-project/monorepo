import { ApiProperty } from '@nestjs/swagger';

import { UpdateAddressDto } from '../../address/dto/update-address.dto';

export class UpdateSchoolDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: UpdateAddressDto;
}
