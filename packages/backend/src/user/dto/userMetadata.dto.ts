import { ApiProperty } from '@nestjs/swagger';

export class UserMetadataDto {
  @ApiProperty({
    example:
      'C. Miguel Lerdo de Tejada 2055, Col Americana, Americana, 44160 Guadalajara, Jal.',
  })
  address: string;

  @ApiProperty({ example: '+52 xxxxxxxxxx' })
  phone: string;

  @ApiProperty({ example: '01/01/1995' })
  birthday: string;
}
