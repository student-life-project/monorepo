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
    @Inject(PaginationMoogooseService)
    private paginationService: PaginationMoogooseService<CommentDocument>,
  ) {}

  private readonly populateQuery = ['ownerId', 'placeId'];

  async createComment(commentData: CreateCommentDto): Promise<Comment> {
    const createdComment = await this.CommentModel.create(commentData);
    return createdComment;
  }

  async createMany(createImageDto: CreateCommentDto[]): Promise<Comment[]> {
    const createdComment = await this.CommentModel.insertMany(createImageDto);
    return createdComment;
  }

  async updateCommentById(
    id: string,
    commentData: CreateCommentDto,
  ): Promise<Comment> {
    const comment = await this.CommentModel.findById(id);
    if (comment?.comment && comment?.ownerId && comment?.placeId) {
      comment.comment = commentData.comment;
      comment.ownerId = commentData.ownerId;
      comment.placeId = commentData.placeId;
    }
    const updatedComment = await comment?.save();
    return updatedComment as Comment;
  }

  async deleteById(id: string) {
    return this.CommentModel.findByIdAndDelete(id);
  }

  async deleteByPlaceId(id: string) {
    const rentalPlacefinded =
      (await this.RentalPlaceModel.findById(id)) || undefined;

    if (!rentalPlacefinded)
      return {
        deletedCount: 0,
      };

    const deletedOnes = await this.CommentModel.deleteMany({
      placeId: rentalPlacefinded?.id,
    });

    return deletedOnes;
  }

  async getByRentalPlaceId(
    placeId: string,
    paginatioParams: IPaginationParams = {},
  ): Promise<IPagination<Comment>> {
    const { dataQuery: commentsFindedQuery, ...paginationData } =
      await this.paginationService.paginate(
        this.CommentModel,
        paginatioParams,
        {
          placeId,
        } as FilterQuery<CommentDocument>,
      );

    const commentsFinded = await commentsFindedQuery.populate(
      this.populateQuery,
    );

    return { data: commentsFinded, ...paginationData };
  }

  async getByOwnerId(
    ownerId: string,
    paginatioParams: IPaginationParams = {},
  ): Promise<IPagination<Comment>> {
    const { dataQuery: commentsFindedQuery, ...paginationData } =
      await this.paginationService.paginate(
        this.CommentModel,
        paginatioParams,
        {
          ownerId,
        } as FilterQuery<CommentDocument>,
      );

    const commentsFinded = await commentsFindedQuery.populate(
      this.populateQuery,
    );

    return { data: commentsFinded, ...paginationData };
  }

  async getByCommentId(id: string) {
    return this.CommentModel.findById(id).populate(this.populateQuery);
  }
}
