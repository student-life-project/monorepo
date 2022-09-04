// TODO: Crear types y cambiar los any
import { types } from '@/store/types/admin';
import { TElementId } from '@/types';

export const searchUser = (name: string): any => ({
  type: types.SEARCH_USER,
  name,
});

export const changeUserStatus = (id: TElementId): any => ({
  type: types.CHANGE_USER_STATUS,
  id,
});

export const deleteUser = (id: TElementId): any => ({
  type: types.DELETE_USER,
  id,
});

export const searchPublication = (name: string): any => ({
  type: types.SEARCH_PUBLICATION,
  name,
});

export const changePublicationApproval = (id: TElementId): any => ({
  type: types.CHANGE_PUBLICATION_APPROVAL,
  id,
});

export const deletePublication = (id: TElementId): any => ({
  type: types.DELETE_PUBLICATION,
  id,
});

export const searchReport = (name: string): any => ({
  type: types.SEARCH_REPORT,
  name,
});

export const changeReportStatus = (id: TElementId): any => ({
  type: types.CHANGE_REPORT_STATUS,
  id,
});

export const deleteReport = (id: TElementId): any => ({
  type: types.DELETE_PUBLICATION,
  id,
});
