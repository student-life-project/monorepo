import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { States } from '@student_life/common';
import { IsISO31661Alpha2, Validate } from 'class-validator';

import { IsPostalCodeByCountryCode } from '../../helper/custom-validation';

const defaultState = States.find((state) => Boolean(state.Jalisco))?.Jalisco;

export class CreateAddressDto {
  @ApiProperty({
    title: 'Full Street',
    description: 'Principal street',
    example: 'Blvd. Gral. Marcelino García Barragán',
  })
  street: string;

  @ApiProperty({ example: '142' })
  extNumber: string;

  @ApiPropertyOptional()
  intNumber?: string;

  @ApiPropertyOptional()
  crossStreet: string;

  @ApiProperty({
    description: 'State (now only in México)',
    example: defaultState,
    enum: States,
  })
  state: string;

  @ApiProperty({
    description: 'City',
    example: 'Guadalajara',
  })
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

  @ApiProperty({ example: 'Entre Calz. olimipica y C. Corregidora' })
  reference: string;

  @ApiProperty({
    description: 'Name of the zone',
    example: 'Olimpica',
  })
  cologne: string;

  // @ApiProperty({ example: 'Cerca de plaza forum, cfe' })
  // zone: string;

  @ApiPropertyOptional({ example: 'México' })
  country?: string;

  @ApiProperty({ example: [-103.3254497, 20.6548611] })
  location?: {
    type: string;
    coordinates: number[];
  };

  @ApiPropertyOptional({})
  placeId?: string;

  @ApiPropertyOptional({})
  ownerId?: string;
}
