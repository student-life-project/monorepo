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

import { CreateAddressDto } from '../../address/dto/create-address.dto';
import {
  CustomEnum,
  CustomEnumArray,
  CustomEnumArrayOptional,
} from '../../helper/custom-validation';

export class CreateRentalPlaceDto {
  @ApiProperty({
    example: 'Casa cerca de la universidad',
  })
  title: string;

  @ApiProperty({
    example: 'Quiero rentar',
    examples: ['Quiero rentar', 'Busco roomie'],
  })
  @Validate(CustomEnum, Reason)
  reason: string;

  @ApiProperty({
    example: 'Lugar completo',
    examples: ['Lugar completo', 'Cuarto privado', 'Cuarto compartido', 'Otro'],
  })
  @Validate(CustomEnum, TypeSpace)
  typeSpace: string;

  @ApiProperty({
    example: 'Sin preferencia',
    examples: ['Hombre', 'Mujer', 'Non-binary', 'Sin preferencia'],
  })
  @Validate(CustomEnum, Gender)
  gender: string;

  @ApiProperty({
    example: 3500.0,
    minimum: 0.0,
  })
  price: number;

  @ApiProperty({ example: 1 })
  availability: boolean;

  @ApiProperty()
  address: CreateAddressDto;

  @ApiProperty({ example: 'casa con baño completo, cocina, ...' })
  description: string;

  @ApiProperty({
    example: ['Baño', 'Cocina', 'Lavadora', 'Servicios públicos'],
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
  services: string[];

  @ApiProperty({
    example: ['No fumar', 'No mascotas', 'No drogas'],
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
  rules: string[];

  @ApiProperty({
    example: [],
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
  security: string[];

  @ApiHideProperty()
  owner?: string;
}
