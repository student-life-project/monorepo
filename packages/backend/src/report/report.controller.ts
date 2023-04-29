import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiNotAcceptableResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  EOrder,
  EUserType,
  IAuth0User,
  IPaginationParams,
} from '@student_life/common/dist';

import { UserService } from '../user/user.service';
import { Report } from './report.schema';
import { ReportService } from './report.service';

@ApiTags('Report')
@Controller('Report')
export class ReportController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly reportService: ReportService,
    private readonly userService: UserService,
  ) {}

  @ApiOkResponse({
    description: 'create a report that can be for a user or a publication',
    status: 201,
  })
  @ApiNotAcceptableResponse({
    description: 'the request body must match and have existing information',
    status: 400,
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth('bearer')
  @Post()
  async createReport(
    @Req() req: Request & { user: IAuth0User },
    @Body() report: { report: Report },
  ) {
    const currentUserData = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: (req.user.name || '').toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });

    return this.reportService.createReport({
      ...report.report,
      reporterId: currentUserData?._id,
    });
  }

  @ApiOkResponse({
    description: 'get all the reports',
    status: 201,
  })
  @ApiNotAcceptableResponse({
    description: 'the request body must match and have existing information',
    status: 400,
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth('bearer')
  @Get()
  async getAllReports(
    // @Req() req: Request & { user: IAuth0User },
    @Query()
    {
      sortBy = 'createdAt',
      from = 0,
      limit = 10,
      order = EOrder.desc,
      ...paginationParams
    }: IPaginationParams = {},
  ) {
    const reporstList = await this.reportService.find(paginationParams, {
      sortBy,
      from,
      limit,
      order,
    });

    return reporstList;
  }

  @ApiOkResponse({
    description: 'get a report by id',
    status: 201,
  })
  @ApiNotFoundResponse({
    description: 'the request body must match and have existing information',
    status: 404,
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth('bearer')
  @Get('/:id')
  async getById(
    // @Req() req: Request & { user: IAuth0User },
    @Param('id') reportId: string,
  ) {
    return this.reportService.getById(reportId);
  }

  @ApiOkResponse({
    description: 'updates a report that can be for a user or a publication',
    status: 201,
  })
  @ApiNotFoundResponse({
    description: 'the request body must match and have existing information',
    status: 404,
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth('bearer')
  @Put('/:id')
  async updateById(
    @Param('id') reportId: string,
    @Req() req: Request & { user: IAuth0User },
    @Body() report: { report: Report },
  ) {
    const currentUserData = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: (req.user.name || '').toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });

    const reportFinded = await this.reportService.getById(reportId);

    if (
      (currentUserData &&
        currentUserData.type !== (EUserType.ADMIN as string)) ||
      (reportFinded && reportFinded.reporterId === currentUserData?._id)
    ) {
      throw UnauthorizedException;
    }

    const reportObj = reportFinded?.toObject();

    return this.reportService.updateById(reportId, {
      ...reportObj,
      ...report.report,
    });
  }

  @ApiOkResponse({
    description: 'deletes a report',
    status: 201,
  })
  @ApiNotFoundResponse({
    description: 'the request body must match and have existing information',
    status: 404,
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth('bearer')
  @Delete('/:id')
  async deleteById(
    @Param('id') reportId: string,
    @Req() req: Request & { user: IAuth0User },
  ) {
    const currentUserData = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: (req.user.name || '').toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });

    const reportFinded = await this.reportService.getById(reportId);

    if (
      (currentUserData &&
        currentUserData.type !== (EUserType.ADMIN as string)) ||
      (reportFinded && reportFinded.reporterId === currentUserData?._id)
    ) {
      throw UnauthorizedException;
    }

    return this.reportService.deleteById(reportId);
  }
}
