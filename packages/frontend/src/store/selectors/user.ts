import { TRootState } from '../reducers';

export const userSelector = (state: TRootState) => state.user.user;

export const credentialsSelector = (state: TRootState) =>
  state.user.credentials;

export const isFetchingUserSelector = (state: TRootState) =>
  state.user.isFetching;

export const errorUserSelector = (state: TRootState) => state.user.error;

export const isUserAuthenticated = (state: TRootState) =>
  Boolean(Object.keys(state.user.user).length);
