export const stateManagePublicationsSelector = (state: any) =>
  state.managePublications;

export const managePublicationsSelector = (state: any) =>
  state.managePublications.publications;

export const isFetchingManagePublicationsSelector = (state: any) =>
  state.managePublications.isFetching;

export const errorManagePublicationsSelector = (state: any) =>
  state.managePublications.error;
