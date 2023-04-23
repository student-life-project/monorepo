import { TRootState } from '../reducers';

export const stateManagePublicationsSelector = (state: TRootState) =>
  state.managePublications;

export const managePublicationSelector = (state: TRootState) =>
  state.managePublications.publication;

export const managePublicationsSelector = (state: TRootState) =>
  state.managePublications.publications.data;

export const isFetchingManagePublicationsSelector = (state: TRootState) =>
  state.managePublications.isFetching;

export const errorManagePublicationsSelector = (state: TRootState) =>
  state.managePublications.error;
