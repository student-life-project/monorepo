import { TRootState } from '../reducers';

export const manageReportsSelector = (state: TRootState) =>
  state.manageReports.reports;

export const isFetchingManageReportsSelector = (state: TRootState) =>
  state.manageReports.isFetching;
