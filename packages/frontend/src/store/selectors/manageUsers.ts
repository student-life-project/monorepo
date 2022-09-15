export const stateManageUserSelector = (state: any) => state.manageUsers;

export const manageUserSelector = (state: any) => state.manageUsers.users;

export const isFetchingManageUserSelector = (state: any) =>
  state.manageUsers.isFetching;

export const errorManageUserSelector = (state: any) => state.manageUsers.error;
