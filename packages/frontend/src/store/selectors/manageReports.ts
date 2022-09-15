export const stateManageReportsSelector = (state: any) => state.manageReports;

export const manageReportsSelector = (state: any) =>
  state.manageReports.reports;

export const isFetchingManageReportsSelector = (state: any) =>
  state.manageReports.isFetching;

export const errorManageReportsSelector = (state: any) =>
  state.manageReports.error;
