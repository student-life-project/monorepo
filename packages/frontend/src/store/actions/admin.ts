// TODO: Crear types y cambiar los any
import { types } from '@/store/types/admin';

export const searchUser = (payload: string): any => ({
  type: types.SEARCH_USER,
  payload,
});

export const changeUserStatus = (payload: number): any => ({
  type: types.CHANGE_USER_STATUS,
  payload,
});

export const deleteUser = (payload: number): any => ({
  type: types.DELETE_USER,
  payload,
});

export const searchPublication = (payload: string): any => ({
  type: types.SEARCH_PUBLICATION,
  payload,
});

export const changePublicationApproval = (payload: number): any => ({
  type: types.CHANGE_PUBLICATION_APPROVAL,
  payload,
});

export const deletePublication = (payload: number): any => ({
  type: types.DELETE_PUBLICATION,
  payload,
});

export const searchReport = (payload: string): any => ({
  type: types.SEARCH_REPORT,
  payload,
});

export const changeReportStatus = (payload: number): any => ({
  type: types.CHANGE_REPORT_STATUS,
  payload,
});

export const deleteReport = (payload: number): any => ({
  type: types.DELETE_PUBLICATION,
  payload,
});
