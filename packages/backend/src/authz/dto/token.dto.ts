import { ApiProperty } from '@nestjs/swagger';

export class ResponseTokenDto {
  @ApiProperty()
  iss: string;

  @ApiProperty()
  sub: string;

  @ApiProperty({ type: [String] })
  aud: string[];

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;

  @ApiProperty()
  azp: string;

  @ApiProperty()
  scope: string;

  @ApiProperty({ type: [String] })
  permissions: string[];

  @ApiProperty({ type: [String] })
  'https://student-life-auth-api/roles': string[];
}
