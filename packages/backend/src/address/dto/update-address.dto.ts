import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { States } from '@student_life/common';
import { IsISO31661Alpha2, Validate } from 'class-validator';

import { IsPostalCodeByCountryCode } from '../../helper/is-postal-code-by-country-code-validation';

const defaultState = States.find((state) => Boolean(state.Jalisco))?.Jalisco;

export class UpdateAddressDto {
  @ApiProperty()
  _id: string;

  @ApiProperty({ example: 'Blvd. Gral. Marcelino García Barragán' })
  street: string;

  @ApiProperty({ example: '142' })
  extNumber: string;

  @ApiPropertyOptional()
  intNumber: string;

  @ApiPropertyOptional()
  crossStreet: string;

  // @Validate(CustomEnum, States)
  @ApiProperty({
    example: defaultState,
    enum: States,
  })
  state: string;

  @ApiProperty({ example: 'Guadalajara' })
  city: string;

  @Validate(IsPostalCodeByCountryCode)
  @ApiProperty({
    title: 'Postal Code',
    description: 'Postal Code/Zip Code (Zone Improvement Plan)',
    example: '44430',
  })
  stateCode: string;

  @IsISO31661Alpha2()
  @ApiProperty({
    title: 'Country Code',
    description:
      'Country Code ISO 3166-1 alpha-2 officially assigned country code',
    example: 'MX',
    default: 'MX',
  })
  countryCode = 'MX';

  @ApiProperty({
    example:
      'Entre Calz. olimipica y C. Corregidora a 2 cuadras de plaza forum',
  })
  reference: string;

  @ApiProperty({ example: 'Olimpica' })
  cologne: string;

  // @ApiProperty({
  //   example: 'Cerca de plaza forum, cfe, little cesar, linea 3 del tren ligero',
  // })
  // zone: string;

  @ApiPropertyOptional({ example: 'México' })
  country?: string;

  @ApiProperty({ example: [-103.3254497, 20.6548611] })
  location: {
    type: string;
    coordinates: number[];
  };

  @ApiPropertyOptional({})
  placeId?: string;

  @ApiPropertyOptional({})
  ownerId?: string;
}
