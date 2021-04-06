import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const {
      MONGODB_USER,
      MONGODB_PASSWORD,
      MONGODB_URL,
      MONGODB_CLUSTER,
      MONGODB_DB,
    } = process.env;

    const conectionUrl = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

    return {
      uri: conectionUrl,
      pass: 'hjHnyN8nwRnNqhu',
      user: 'student_life_user5647238',
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
  }
}
