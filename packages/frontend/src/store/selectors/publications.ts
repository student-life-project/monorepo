import { TRootState } from '../reducers';

export const publicationSelector = (state: TRootState) =>
  state.publications.publication;

export const publicationsSelector = (state: TRootState) =>
  state.publications.publications.data;

export const isFetchingPublicationsSelector = (state: TRootState) =>
  state.publications.isFetching;
