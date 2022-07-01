import { ApiProperty } from '@nestjs/swagger';
import { EUserType } from '@student_life/common';

export class RoleDto {
  @ApiProperty({ enum: EUserType, example: EUserType.OWNER })
  role: EUserType;
}
