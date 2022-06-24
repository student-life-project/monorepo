import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiNotFoundResponse({ description: 'Service does not exists' })
  @ApiOkResponse({ description: 'Get a user profile by auth token' })
  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  async getProfile(@Req() req: Request) {
    return this.userService.validateToken((req as unknown as any).user);
  }
}
