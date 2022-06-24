import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {
    if (this.userModel === null) {
      throw new Error('');
    }
  }

  validateToken(token: string) {
    if (token === '') {
      throw new Error('');
    }
  }

  loginOrRegister() {
    return 'hi';
  }
}
