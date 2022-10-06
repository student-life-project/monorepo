import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
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
import { IPaginationParams } from '@student_life/common/dist';

import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@ApiTags('Comment')
@Controller('Comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOkResponse({
    description: 'create or add a comment for a rental place',
    status: 201,
  })
  @ApiNotAcceptableResponse({
    description: 'the request body must match and be existing information',
    status: 400,
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth('bearer')
  @Post()
  addCommentForRentalPlace(@Body() body: CreateCommentDto) {
    return this.commentService.createComment(body);
  }

  @ApiOkResponse({
    description:
      'returns an array with the comments that belongs to a rental place',
    status: 200,
  })
  @ApiNotFoundResponse({
    description: 'it will fails only when the rental place id is not valid',
    status: 404,
  })
  @Get('/rental-place/:placeId')
  getCommentsForRentaPlace(
    @Param('placeId') placeId: string,
    @Query() paginationParams: IPaginationParams,
  ) {
    return this.commentService.getByRentalPlaceId(placeId, paginationParams);
  }
}
