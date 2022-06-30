import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  Gender,
  Reason,
  Rules,
  Security,
  Services,
  TypeSpace,
} from '@student_life/common';
import { Validate } from 'class-validator';

import { UpdateAddressDto } from '../../address/dto/update-address.dto';
import {
  CustomEnum,
  CustomEnumArray,
  CustomEnumArrayOptional,
} from '../../helper/custom-validation';
import { CreateImageDto } from '../../image/dto/create-image.dto';
import { CreateRateDto } from '../../rate/dto/create-rate.dto';

export class UpdateRentalPlaceDto {
  @ApiProperty({
    example: 'Casa cerca de la universidad',
  })
  title?: string;

  @ApiProperty({
    example: 'Quiero rentar',
    examples: ['Quiero rentar', 'Busco roomie'],
  })
  @Validate(CustomEnum, Reason)
  reason?: string;

  @ApiProperty({
    example: 'Cuarto compartido',
    examples: ['Lugar completo', 'Cuarto privado', 'Cuarto compartido', 'Otro'],
  })
  @Validate(CustomEnum, TypeSpace)
  typeSpace?: string;

  @ApiProperty({
    example: 'Mujer',
    examples: ['Hombre', 'Mujer', 'Non-binary', 'Sin preferencia'],
  })
  @Validate(CustomEnum, Gender)
  gender?: string;

  @ApiProperty({
    example: 4500.0,
    minimum: 0.0,
  })
  price?: number;

  @ApiProperty({ example: 1 })
  availability?: boolean;

  @ApiProperty()
  address?: UpdateAddressDto;

  @ApiProperty({ example: 'casa con baño completo, cocina, ...' })
  description?: string;

  @ApiProperty({
    example: [
      'Baño',
      'Cocina',
      'Lavadora',
      'Servicios públicos',
      'Wi-Fi incluido',
    ],
    examples: [
      'Baño',
      'Cocina',
      'Lavadora',
      'Elevador',
      'Amueblado',
      'Estacionamiento',
      'Con balcón o patio',
      'Servicios públicos',
      'Aire acondicionado',
      'Área de estudio',
      'TV',
      'Wi-Fi incluido',
      'Se admiten mascotas',
    ],
  })
  @Validate(CustomEnumArray, Services)
  services?: string[];

  @ApiProperty({
    example: ['No fumar', 'No mascotas', 'No drogas', 'No fiestas'],
    examples: [
      'No fumar',
      'No mascotas',
      'No drogas',
      'No beber',
      'No Parejas',
      'No fiestas',
      'No invitados',
    ],
  })
  @Validate(CustomEnumArrayOptional, Rules)
  rules?: string[];

  @ApiProperty({
    example: ['Cámaras', 'Seguridad privada'],
    examples: [
      'Alarma de incendios',
      'Alarma antirrobo',
      'Cámaras',
      'Seguridad privada',
      'Salidas de emergencia',
      'Señalamientos de seguridad',
      'Botiquín de primeros auxilios',
      'Extintores',
    ],
  })
  @Validate(CustomEnumArrayOptional, Security)
  security?: string[];

  @ApiProperty()
  owner?: string;

  @ApiHideProperty()
  images?: CreateImageDto[];

  @ApiProperty({ type: [CreateRateDto] })
  rates?: CreateRateDto[];
}
