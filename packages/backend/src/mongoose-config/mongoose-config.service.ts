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
      MONGODB_PORT,
      MONGODB_CLUSTER,
      MONGODB_DB,
    } = process.env;

    const conectionUrl = `mongodb${
      MONGODB_CLUSTER ? `+srv` : ''
    }://${MONGODB_USER}:${MONGODB_PASSWORD}@${
      MONGODB_CLUSTER ? `${MONGODB_CLUSTER}.` : ''
    }${MONGODB_URL}${
      MONGODB_PORT ? `:${MONGODB_PORT}` : ''
    }/${MONGODB_DB}?retryWrites=true&w=majority`;

    return {
      uri: conectionUrl,
      pass: MONGODB_PASSWORD,
      user: MONGODB_USER,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
  }
}
