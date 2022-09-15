export const statePublicationsSelector = (state: any) => state.publications;

export const publicationsSelector = (state: any) =>
  state.publications.publications;

export const isFetchingPublicationsSelector = (state: any) =>
  state.publications.isFetching;

export const errorPublicationsSelector = (state: any) =>
  state.publications.error;
