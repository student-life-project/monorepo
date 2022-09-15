export const stateReportsSelector = (state: any) => state.reports;

export const reportsSelector = (state: any) => state.reports.reports;

export const isFetchingManageReportsSelector = (state: any) =>
  state.reports.isFetching;

export const errorReportsSelector = (state: any) => state.reports.error;
