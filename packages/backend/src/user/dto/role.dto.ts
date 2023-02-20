import { ApiProperty } from '@nestjs/swagger';

import { UserType } from '../../helper/types';

export class RoleDto {
  @ApiProperty({ enum: UserType, example: UserType.OWNER })
  role: UserType;
}
