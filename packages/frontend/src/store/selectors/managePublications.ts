export const stateManagePublicationsSelector = (state: any) =>
  state.publications;

export const managePublicationsSelector = (state: any) =>
  state.publications.publications;

export const isFetchingManagePublicationsSelector = (state: any) =>
  state.publications.isFetching;

export const errorManagePublicationsSelector = (state: any) =>
  state.publications.error;
