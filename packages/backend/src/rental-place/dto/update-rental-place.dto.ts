import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsCurrency,
  IsEnum,
} from 'class-validator';

import { UpdateAddressDto } from '../../address/dto/update-address.dto';
import {
  Gender,
  Reason,
  Rules,
  Security,
  Services,
  TypeSpace,
} from '../../helper/types';
import { CreateImageDto } from '../../image/dto/create-image.dto';
import { CreateLikeDto } from '../../like/dto/create-like.dto';

export class UpdateRentalPlaceDto {
  @ApiHideProperty()
  owner?: string;

  @ApiProperty({
    example: 'Casa cerca de la universidad',
  })
  title?: string;

  @IsEnum(Reason)
  @ApiProperty({
    example: Reason['Quiero rentar'],
    enum: Reason,
  })
  reason?: Reason;

  @IsEnum(TypeSpace)
  @ApiProperty({
    example: TypeSpace['Cuarto compartido'],
    enum: TypeSpace,
  })
  typeSpace?: TypeSpace;

  @IsEnum(Gender)
  @ApiProperty({
    example: Gender.Mujer,
    enum: Gender,
  })
  gender?: Gender;

  @IsCurrency({ allow_negatives: false })
  @ApiProperty({
    example: '3500.0',
  })
  price?: number;

  @ApiProperty({ example: true })
  availability?: boolean;

  @ApiProperty()
  address?: UpdateAddressDto;

  @ApiProperty({ example: 'casa con baño completo, cocina, ...' })
  description?: string;

  @ArrayNotEmpty()
  @ArrayUnique()
  @IsEnum(Services, { each: true })
  @ApiProperty({
    example: [
      Services.Baño,
      Services.Cocina,
      Services.Lavadora,
      Services['Servicios públicos'],
      Services['Wi-Fi incluido'],
    ],
    enum: Services,
  })
  services?: Services[];

  @ArrayNotEmpty()
  @ArrayUnique()
  @IsEnum(Rules, { each: true })
  @ApiProperty({
    example: [
      Rules['No fumar'],
      Rules['No mascotas'],
      Rules['No drogas'],
      Rules['No fiestas'],
    ],
    enum: Rules,
  })
  rules?: Rules[];

  @ArrayUnique()
  @IsEnum(Security, { each: true })
  @ApiProperty({
    example: [Security.Cámaras, Security['Seguridad privada']],
    enum: Security,
  })
  security?: Security[];

  @ApiHideProperty()
  images?: CreateImageDto[];

  @ApiProperty({ type: [CreateLikeDto] })
  likes?: CreateLikeDto[];
}
