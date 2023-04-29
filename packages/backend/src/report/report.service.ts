import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPagination, IPaginationParams } from '@student_life/common';
import { FilterQuery, Model } from 'mongoose';

import { PaginationMoogooseService } from '../pagination/Pagination.service';
import { Report } from './report.schema';

@Injectable()
export class ReportService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Report.name)
    private ReportModel: Model<Report>,
    @Inject(PaginationMoogooseService.name)
    private paginationService: PaginationMoogooseService<Report>,
  ) {}

  createReport(reportData: Report) {
    return this.ReportModel.create(reportData);
  }

  getById(id: string) {
    return this.ReportModel.findById(id);
  }

  updateById(id: string, newReportData: Report) {
    return this.ReportModel.findByIdAndUpdate(id, newReportData);
  }

  deleteById(id: string) {
    return this.ReportModel.findByIdAndDelete(id);
  }

  async find(
    query: FilterQuery<Report>,
    paginationParams: IPaginationParams = {},
  ): Promise<IPagination<Report>> {
    const { dataQuery: reportsFindedQuery, ...paginationData } =
      await this.paginationService.paginate(
        this.ReportModel,
        paginationParams,
        query,
      );

    const reportsFinded = await reportsFindedQuery;

    return {
      data: reportsFinded,
      ...paginationData,
    };
  }
}
