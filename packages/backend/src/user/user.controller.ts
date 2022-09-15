import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IAuth0User } from '@student_life/common';
import { Request, Response } from 'express';

import { UserService } from './user.service';

type TReq = Request & { user: IAuth0User };

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiNotFoundResponse({ description: 'Service does not exists' })
  @ApiOkResponse({ description: 'Get a user profile by auth token' })
  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  async getProfile(@Req() req: TReq, @Res() _: Response) {
    // console.log({ user: req.user }, req.user.sub);

    return this.userService.validateToken(req.user as unknown as string);
  }
}
