import { Injectable } from '@nestjs/common';
import { EOrder, IPagination, IPaginationParams } from '@student_life/common';
import { Document, FilterQuery, Model } from 'mongoose';

@Injectable()
export class PaginationMoogooseService<T> {
  async paginate(
    model: Model<T>,
    params: IPaginationParams,
    filter: FilterQuery<T> = {},
  ): Promise<IPagination<T & Document>> {
    const count = await model.find(filter).count();
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
      currentQuery.skip(params.from).limit(params.limit);
      currentPage = Math.round(params.from / params.limit);
      nextPage = params.from < count ? currentPage + 1 : null;
      prevPage = currentPage > 0 ? currentPage - 1 : 0;
    }

    const curentData = await currentQuery;

    return {
      count,
      data: curentData,
      current: currentPage,
      limit: params?.limit,
      next: nextPage,
      prev: prevPage,
    } as IPagination<T & Document>;
  }
}
