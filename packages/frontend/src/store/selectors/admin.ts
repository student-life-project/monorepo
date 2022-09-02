// TODO: Crear types y cambiar los any

export const usersListSelector = (state: any): any => state.admin.usersList;

export const publicationsListSelector = (state: any): any =>
  state.admin.publicationsList;

export const reportsListSelector = (state: any): any => state.admin.reportsList;
