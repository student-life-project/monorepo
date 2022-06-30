import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { States } from '@student_life/common';
import { Validate } from 'class-validator';

import { CustomEnum } from '../../helper/custom-validation';

export class CreateAddressDto {
  @ApiProperty({ example: 'Blvd. Gral. Marcelino García Barragán 1421' })
  street: string;

  @ApiProperty({
    example: 'Jalisco',
    examples: [
      'Aguascalientes',
      'Baja California',
      'Baja California Sur',
      'Chihuahua',
      'Chiapas',
      'Campeche',
      'Ciudad De México',
      'Coahuila',
      'Colima',
      'Durango',
      'Guerrero',
      'Guanajuato',
      'Hidalgo',
      'Jalisco',
      'Michoacan',
      'Estado De México',
      'Morelos',
      'Nayarit',
      'Nuevo León',
      'Oaxaca',
      'Puebla',
      'Quintana Roo',
      'Queretaro',
      'Sinaloa',
      'San Luis Potosí',
      'Sonora',
      'Tabasco',
      'Tlaxcala',
      'Tamaulipas',
      'Veracruz',
      'Yucatan',
      'Zacatecas',
    ],
  })
  @Validate(CustomEnum, States)
  state: string;

  @ApiProperty({ example: 'Guadalajara' })
  city: string;

  @ApiProperty({ example: 'Olimpica' })
  neighborhood: string;

  @ApiProperty({
    minLength: 5,
    maxLength: 7,
    example: '44430',
  })
  stateCode: string;

  @ApiProperty({ example: 'Entre Calz. olimipica y C. Corregidora' })
  reference: string;

  @ApiProperty({ example: 'Cerca de plaza forum, cfe' })
  zone: string;

  @ApiPropertyOptional({ example: 'México' })
  country?: string;

  @ApiPropertyOptional({})
  placeId?: string;

  @ApiPropertyOptional({})
  ownerId?: string;
}
