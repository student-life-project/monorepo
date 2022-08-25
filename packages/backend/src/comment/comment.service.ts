import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Comment, CommentDocument } from './comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Comment.name)
    private CommentModel: Model<CommentDocument>,
  ) {}

  async createMany(createImageDto: CreateCommentDto[]): Promise<Comment[]> {
    const createdComment = await this.CommentModel.insertMany(createImageDto);
    return createdComment;
  }

  async deleteById(id: string) {
    return this.CommentModel.findByIdAndDelete(id);
  }

  async deleteByPlaceId(id: string) {
    return this.CommentModel.deleteMany({ placeId: id });
  }
}
