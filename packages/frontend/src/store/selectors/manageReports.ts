export const stateManageReportsSelector = (state: any) => state.reports;

export const manageReportsSelector = (state: any) => state.reports.reports;

export const isFetchingManageReportsSelector = (state: any) =>
  state.reports.isFetching;

export const errorManageReportsSelector = (state: any) => state.reports.error;
