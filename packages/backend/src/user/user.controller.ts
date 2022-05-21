import {
  Body,
  Controller,
  NotFoundException,
  Patch,
  Put,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { EUserType } from '@student_life/common';

import { RoleDto } from './dto/role.dto';
import { UserMetadataDto } from './dto/userMetadata.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: 'Update user role',
  })
  @ApiNotFoundResponse({
    description: 'Rol does not exists, not able to Update',
  })
  @Put(':id/role')
  async updateRole(@Body() desiredRolEnumerated: RoleDto) {
    // TODO logic to get user id from user token
    // TODO logic to change | to %7C
    // TODO check if the 200 default response with no data works
    const userId = '';
    const token = await this.userService.getToken();
    const roles = await this.userService.getRoles(token);
    const desiredRol = EUserType[desiredRolEnumerated.role];
    const rolId = roles.find((rol) => rol.name === desiredRol)?.id;
    if (!rolId) throw new NotFoundException('Rol does not exists');
    return this.userService.updateUserRole(token, userId, rolId);
  }

  @ApiOkResponse({
    description: 'Update user metadata',
  })
  @ApiNotFoundResponse({
    description: 'User does not exists, not able to Update',
  })
  @Patch(':id/metadata')
  // TODO check real user metadata to include it on DTO
  // TODO add property to avoid security issue (send admin and any user could be admin)
  async updateMetadata(@Body() userMetadata: UserMetadataDto) {
    const userId = '';
    const token = await this.userService.getToken();
    return this.userService.updateUserMetadata(token, userId, userMetadata);
  }
}

// TODO profile/rental-place GET for owner just show owner rentals (here or in rental-place??)

// TODO profile/messages in messages??
// TODO reports POST in reports
