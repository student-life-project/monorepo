import { ApiProperty } from '@nestjs/swagger';

export class CreateRuleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: string;
}
