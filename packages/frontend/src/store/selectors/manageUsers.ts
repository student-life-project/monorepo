import { TRootState } from '../reducers';

export const manageUserSelector = (state: TRootState) => state.manageUsers.user;

export const manageUsersSelector = (state: TRootState) =>
  state.manageUsers.users.data;

export const isFetchingManageUserSelector = (state: TRootState) =>
  state.manageUsers.isFetching;
