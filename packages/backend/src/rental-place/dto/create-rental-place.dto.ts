import { ApiProperty } from '@nestjs/swagger';

import { CreateAddressDto } from '../../address/dto/create-address.dto';
import { CreateImageDto } from '../../image/dto/create-image.dto';
import { CreateRuleDto } from '../../rule/dto/create-rule.dto';

export class CreateRentalPlaceDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  address: CreateAddressDto;

  @ApiProperty()
  price: number;

  @ApiProperty()
  service: string[];

  @ApiProperty()
  characteristics: string[];

  @ApiProperty()
  rules: CreateRuleDto[];

  @ApiProperty()
  images: CreateImageDto[];
}
