import {
  Body,
  Controller,
  NotFoundException,
  Patch,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { EUserType } from '@student_life/common';

import { RoleDto } from './dto/role.dto';
import { UserMetadataDto } from './dto/userMetadata.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly userService: UserService) {}

  // TODO add a school and rental-place to a student
  // TODO add many rental-places to a owner
  // TODO remove characteristics
  // TODO implement message controller
  // TODO implement rate controller
  // TODO implement report service and controller, add report to user and rental place
  // TODO refactor school service populate as in rental place

  @ApiOkResponse({
    description: 'Update user role',
  })
  @ApiNotFoundResponse({
    description: 'Rol does not exists, not able to Update',
  })
  @UseGuards(AuthGuard('jwt'))
  @Put('role')
  async updateRole(@Body() desiredRolEnumerated: RoleDto, @Req() req: any) {
    // TODO check if the 200 default response with no data works
    const token = await this.userService.getToken();
    const roles = await this.userService.getRoles(token);
    const desiredRol = EUserType[desiredRolEnumerated.role];
    const rolId = roles.find((rol) => rol.name === desiredRol)?.id;
    if (!rolId) throw new NotFoundException('Rol does not exists');
    // encodeURI because is userid is a param from the post method
    return this.userService.updateUserRole(token, req.user.sub, rolId);
  }

  @ApiOkResponse({
    description: 'Update user metadata',
  })
  @ApiNotFoundResponse({
    description: 'User does not exists, not able to Update',
  })
  @UseGuards(AuthGuard('jwt'))
  @Patch('/metadata')
  // TODO check real user metadata to include it on DTO
  // TODO add property to avoid security issue (send admin and any user could be admin)
  async updateMetadata(@Body() userMetadata: UserMetadataDto, @Req() req: any) {
    const token = await this.userService.getToken();
    return this.userService.updateUserMetadata(
      token,
      req.user.sub,
      userMetadata,
    );
  }
}

// TODO profile/rental-place GET for owner just show owner rentals (here or in rental-place??)

// TODO profile/messages in messages??
// TODO reports POST in reports
