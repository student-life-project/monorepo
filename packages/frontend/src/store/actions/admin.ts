//! ELIMINAR
// TODO: Crear types y cambiar los any
import { toast } from 'react-toastify';

import { AlertMessage } from '@/constants/alertMessage';
import { TElementId } from '@/types';

import {
  CHANGE_PUBLICATION_APPROVAL,
  DELETE_PUBLICATION,
  SEARCH_PUBLICATION,
} from '../types/managePublication';
import { CHANGE_REPORT_STATUS, SEARCH_REPORT } from '../types/manageReport';
import {
  CHANGE_USER_STATUS,
  DELETE_USER,
  SEARCH_USER,
} from '../types/manageUser';

export const searchUser = (name: string): any => ({
  type: SEARCH_USER,
  name,
});

// eslint-disable-next-line consistent-return
export const changeUserStatus = (id: TElementId): any => {
  try {
    toast.success(AlertMessage.updated('estatus'));
    return {
      type: CHANGE_USER_STATUS,
      id,
    };
  } catch (error) {
    toast.error('aaa no mms');
  }
};

export const deleteUser = (id: TElementId): any => ({
  type: DELETE_USER,
  id,
});

export const searchPublication = (name: string): any => ({
  type: SEARCH_PUBLICATION,
  name,
});

export const changePublicationApproval = (id: TElementId): any => ({
  type: CHANGE_PUBLICATION_APPROVAL,
  id,
});

export const deletePublication = (id: TElementId): any => ({
  type: DELETE_PUBLICATION,
  id,
});

export const searchReport = (name: string): any => ({
  type: SEARCH_REPORT,
  name,
});

export const changeReportStatus = (id: TElementId): any => ({
  type: CHANGE_REPORT_STATUS,
  id,
});

export const deleteReport = (id: TElementId): any => ({
  type: DELETE_PUBLICATION,
  id,
});
