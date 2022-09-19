import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
import {
  CHANGE_USER_STATUS_ERROR,
  CHANGE_USER_STATUS_PENDING,
  CHANGE_USER_STATUS_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_PENDING,
  GET_ALL_USERS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  SEARCH_USER_ERROR,
  SEARCH_USER_PENDING,
  SEARCH_USER_SUCCESS,
} from '@/store/types/manageUsers';
import { IQueryCommonFilters, TElementId } from '@/types';

// TODO: ELIMINAR
import {
  dataUser,
  dataUsers,
  dataUsersChangeStatus,
  dataUserSearch,
} from '../dataFakeTemp';

// =============================================================================

export const getUserPendingAction = (): any => ({
  type: GET_USER_PENDING,
});

export const getUserSuccessAction = (data: unknown): any => ({
  type: GET_USER_SUCCESS,
  data,
});

export const getUserErrorAction = (error: AxiosError): any => ({
  type: GET_USER_ERROR,
  error,
});

export const getUser =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(getUserPendingAction());
      // const { data } = await api.get(`/user/${id}`);

      // TODO: Eliminar
      const data = dataUser(id);
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(getUserSuccessAction(data));
    } catch (error) {
      dispatch(getUserErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const searchUserPendingAction = (): any => ({
  type: SEARCH_USER_PENDING,
});

export const searchUserSuccessAction = (data: unknown): any => ({
  type: SEARCH_USER_SUCCESS,
  data,
});

export const searchUserErrorAction = (error: AxiosError): any => ({
  type: SEARCH_USER_ERROR,
  error,
});

export const searchUser =
  (text = ''): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(searchUserPendingAction());
      // const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      // const { data } = await api.get(`/user${filter}`);

      // TODO: Eliminar
      const data = dataUserSearch(text);
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(searchUserSuccessAction(data));
    } catch (error) {
      dispatch(searchUserErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const deleteUserPendingAction = (): any => ({
  type: DELETE_USER_PENDING,
});

export const deleteUserSuccessAction = (data: unknown): any => ({
  type: DELETE_USER_SUCCESS,
  data,
});

export const deleteUserErrorAction = (error: AxiosError): any => ({
  type: DELETE_USER_ERROR,
  error,
});

export const deleteUser =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(deleteUserPendingAction());
      // const { data } = await api.delete(`/user/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(deleteUserSuccessAction(data));
      toast.success(AlertMessage.deleted('usuario'));
    } catch (error) {
      dispatch(deleteUserErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllUserPendingAction = (): any => ({
  type: GET_ALL_USERS_PENDING,
});

export const getAllUserSuccessAction = (data: unknown): any => ({
  type: GET_ALL_USERS_SUCCESS,
  data,
});

export const getAllUserErrorAction = (error: AxiosError): any => ({
  type: GET_ALL_USERS_ERROR,
  error,
});

export const getAllUser =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    any
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllUserPendingAction());
      // const limitQuery = limit ? `?limit=${limit}` : '';
      // const { data } = await api.get(`/user${limitQuery}`);

      // TODO: Eliminar
      const data = dataUsers;
      // eslint-disable-next-line no-console
      console.log(limit);

      dispatch(getAllUserSuccessAction(data));
    } catch (error) {
      dispatch(getAllUserErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const changeUserStatusPendingAction = (): any => ({
  type: CHANGE_USER_STATUS_PENDING,
});

export const changeUserStatusSuccessAction = (data: unknown): any => ({
  type: CHANGE_USER_STATUS_SUCCESS,
  data,
});

export const changeUserStatusErrorAction = (error: AxiosError): any => ({
  type: CHANGE_USER_STATUS_ERROR,
  error,
});

export const changeUserStatus =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(changeUserStatusPendingAction());
      // const { data } = await api.put(`/user/${id}`);

      // TODO: Eliminar
      const data = dataUsersChangeStatus(id);
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(changeUserStatusSuccessAction(data));
      toast.success(AlertMessage.updated('estatus'));
    } catch (error) {
      dispatch(changeUserStatusErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
