import { Injectable } from '@nestjs/common';
import { EOrder, IPagination, IPaginationParams } from '@student_life/common';
import { Document, EnforceDocument, FilterQuery, Model, Query } from 'mongoose';

type TPaginationMongooseQuery<T> = Omit<IPagination<T>, 'data'> & {
  dataQuery: Query<EnforceDocument<T, any>[], EnforceDocument<T, any>, any>;
};

@Injectable()
export class PaginationMoogooseService<T> {
  async paginate(
    model: Model<T>,
    params: IPaginationParams,
    filter: FilterQuery<T> = {},
  ): Promise<TPaginationMongooseQuery<T & Document>> {
    const count = await model.find(filter).countDocuments();
    const currentQuery = model.find(filter);
    let currentPage = 0;
    let nextPage: number | null = 0;
    let prevPage = 0;

    if (params.sortBy) {
      currentQuery.sort({
        [params.sortBy]: params.order ? params.order : EOrder.asc,
      });
    }

    if (params.from && params.limit) {
      const from =
        typeof params.from === 'string'
          ? parseInt(params.from, 10)
          : params.from;

      const limit =
        typeof params.limit === 'string'
          ? parseInt(params.limit, 10)
          : params.limit;

      currentQuery.skip(from).limit(limit);
      currentPage = Math.round(from / limit);
      nextPage = from < count ? currentPage + 1 : null;
      prevPage = currentPage > 0 ? currentPage - 1 : 0;
    }

    return {
      count,
      dataQuery: currentQuery,
      current: currentPage,
      limit: params?.limit,
      next: nextPage,
      prev: prevPage,
    } as TPaginationMongooseQuery<T & Document>;
  }
}
