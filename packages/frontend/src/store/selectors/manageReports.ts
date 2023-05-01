import { TRootState } from '../reducers';

export const manageReportsSelector = (state: TRootState) =>
  state.manageReports.reports.data;

export const manageReportSelector = (state: TRootState) =>
  state.manageReports.report;

export const isFetchingManageReportsSelector = (state: TRootState) =>
  state.manageReports.isFetching;
