import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsCurrency,
  IsEnum,
} from 'class-validator';

import { CreateAddressDto } from '../../address/dto/create-address.dto';
import {
  Gender,
  Reason,
  Rules,
  Security,
  Services,
  TypeSpace,
} from '../../helper/types';

export class CreateRentalPlaceDto {
  @ApiHideProperty()
  owner: string;

  @ApiProperty({
    example: 'Casa cerca de la universidad',
  })
  title: string;

  @IsEnum(Reason)
  @ApiProperty({
    example: Reason['Quiero rentar'],
    enum: Reason,
  })
  reason: Reason;

  @IsEnum(TypeSpace)
  @ApiProperty({
    example: TypeSpace['Lugar completo'],
    enum: TypeSpace,
  })
  typeSpace: TypeSpace;

  @IsEnum(Gender)
  @ApiProperty({
    example: Gender['Sin preferencia'],
    enum: Gender,
  })
  gender: Gender;

  @IsCurrency({ allow_negatives: false })
  @ApiProperty({
    example: '3500.00',
    format: '0 0.00 1000 1,000 1,000.00',
  })
  price: string;

  // @ApiProperty({ example: true })
  // availability: boolean;

  @ApiProperty()
  address: CreateAddressDto;

  @ApiProperty({ example: 'casa con baño completo, cocina, ...' })
  description: string;

  @ArrayNotEmpty()
  @ArrayUnique()
  @IsEnum(Services, { each: true })
  @ApiProperty({
    example: [
      Services.Baño,
      Services.Cocina,
      Services.Lavadora,
      Services['Servicios públicos'],
    ],
    enum: Services,
  })
  services: Services[];

  @ArrayNotEmpty()
  @ArrayUnique()
  @IsEnum(Rules, { each: true })
  @ApiProperty({
    example: [Rules['No fumar'], Rules['No mascotas'], Rules['No drogas']],
    enum: Rules,
  })
  rules: Rules[];

  @ArrayUnique()
  @IsEnum(Security, { each: true })
  @ApiPropertyOptional({
    example: [],
    enum: Security,
  })
  security: Security[];
}
