import { ApiProperty } from '@nestjs/swagger';

export class ResponseTokenDto {
  @ApiProperty()
  // eslint-disable-next-line camelcase
  access_token: string;

  @ApiProperty()
  // eslint-disable-next-line camelcase
  expires_in: number;

  @ApiProperty()
  scope: string;

  @ApiProperty()
  // eslint-disable-next-line camelcase
  token_type: string;
}
