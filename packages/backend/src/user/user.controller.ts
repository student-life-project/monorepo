import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Patch,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { EUserType, IUser } from '@student_life/common/dist';

import { UserType } from '../helper/types';
import { RoleDto } from './dto/role.dto';
import { UserMetadataDto } from './dto/userMetadata.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly userService: UserService) {}

  // TODO add a school and rental-place to a student
  // TODO add many rental-places to a owner (dont think)
  // TODO implement rate controller
  // TODO implement report service and controller, add report to user and rental place
  // TODO profile/rental-place GET for owner just show owner rentals (here or in rental-place??)

  // TODO reports POST in reports
  // TODO refactor school service populate as in rental place

  @ApiOkResponse({
    description: 'Update user role',
  })
  @ApiNotFoundResponse({
    description: 'Rol does not exists, not able to Update',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth()
  @Put('role')
  async updateRole(@Body() desiredRolEnumerated: RoleDto, @Req() req: any) {
    // TODO check if the 200 default response with no data works
    const token = await this.userService.getToken();
    const roles = await this.userService.getRoles(token);
    const desiredRol = UserType[desiredRolEnumerated.role];
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
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth()
  @Patch('/metadata')
  async updateMetadata(@Body() userMetadata: UserMetadataDto, @Req() req: any) {
    // TODO check real user metadata to include it on DTO
    // TODO add property to avoid security issue (send admin and any user could be admin)
    const token = await this.userService.getToken();
    return this.userService.updateUserMetadata(
      token,
      req.user.sub,
      userMetadata,
    );
  }

  @ApiOkResponse({
    description: 'get user information',
  })
  @ApiNotFoundResponse({
    description: 'user profile does not exists, not able to fetch it',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth()
  @Get('/profile')
  async getUserProfile(@Req() req: any) {
    return this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });
  }

  @ApiOkResponse({
    description: 'update user information',
  })
  @ApiNotFoundResponse({
    description: 'user profile does not exists, not able to fetch it',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth()
  @Put('/profile')
  async updateUserProfile(
    @Req() req: any,
    @Body() profileData: { user: IUser },
  ) {
    const currentUserData = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });

    const updatedUserProfile = await this.userService.updateUserProfile(
      currentUserData?._id,
      {
        ...currentUserData?.toObject(),
        ...profileData?.user,
      } as IUser,
    );

    return updatedUserProfile;
  }
}
