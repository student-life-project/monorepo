import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPagination, IPaginationParams } from '@student_life/common/dist';
import { FilterQuery, Model } from 'mongoose';

import { PaginationMoogooseService } from '../pagination/Pagination.service';
import {
  RentalPlace,
  RentalPlaceDocument,
} from '../rental-place/rental-place.schema';
import { Comment, CommentDocument } from './comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Comment.name)
    private CommentModel: Model<CommentDocument>,
    @InjectModel(RentalPlace.name)
    private RentalPlaceModel: Model<RentalPlaceDocument>,
    @Inject()
    private paginationService: PaginationMoogooseService<CommentDocument>,
  ) {}

  async createComment(commentData: CreateCommentDto): Promise<Comment> {
    const createdComment = await this.CommentModel.create(commentData);
    return createdComment;
  }

  async createMany(createImageDto: CreateCommentDto[]): Promise<Comment[]> {
    const createdComment = await this.CommentModel.insertMany(createImageDto);
    return createdComment;
  }

  async deleteById(id: string) {
    return this.CommentModel.findByIdAndDelete(id);
  }

  async deleteByPlaceId(id: string) {
    const rentalPlacefinded =
      (await this.RentalPlaceModel.findById(id)) || undefined;

    return this.CommentModel.deleteMany({ placeId: rentalPlacefinded });
  }

  async getByRentalPlaceId(
    placeId: string,
    paginatioParams: IPaginationParams = {},
  ): Promise<IPagination<Comment>> {
    const commentsFinded = await this.paginationService.paginate(
      this.CommentModel,
      paginatioParams,
      {
        placeId,
      } as FilterQuery<CommentDocument>,
    );

    return commentsFinded;
  }
}
