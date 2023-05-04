import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { api } from '@/services/api';
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
import { IQueryCommonFilters, IUsers, TElementId, TUser } from '@/types';

interface IGetUserPendingAction {
  type: typeof GET_USER_PENDING;
}

interface IGetUserSuccessAction {
  type: typeof GET_USER_SUCCESS;
  data: IUsers;
}

interface IGetUserErrorAction {
  type: typeof GET_USER_ERROR;
  error: AxiosError;
}

interface ISearchUserPendingAction {
  type: typeof SEARCH_USER_PENDING;
}

interface ISearchUserSuccessAction {
  type: typeof SEARCH_USER_SUCCESS;
  data: IUsers;
}

interface ISearchUserErrorAction {
  type: typeof SEARCH_USER_ERROR;
  error: AxiosError;
}

interface IDeleteUserPendingAction {
  type: typeof DELETE_USER_PENDING;
}

interface IDeleteUserSuccessAction {
  type: typeof DELETE_USER_SUCCESS;
  data: IUsers;
}

interface IDeleteUserErrorAction {
  type: typeof DELETE_USER_ERROR;
  error: AxiosError;
}

interface IGetAllUsersPendingAction {
  type: typeof GET_ALL_USERS_PENDING;
}

interface IGetAllUsersSuccessAction {
  type: typeof GET_ALL_USERS_SUCCESS;
  data: IUsers;
}

interface IGetAllUsersErrorAction {
  type: typeof GET_ALL_USERS_ERROR;
  error: AxiosError;
}

interface IChangeUserStatusPendingAction {
  type: typeof CHANGE_USER_STATUS_PENDING;
}

interface IChangeUserStatusSuccessAction {
  type: typeof CHANGE_USER_STATUS_SUCCESS;
  data: IUsers;
}

interface IChangeUserStatusErrorAction {
  type: typeof CHANGE_USER_STATUS_ERROR;
  error: AxiosError;
}

export type TUsersAction =
  | IGetUserPendingAction
  | IGetUserSuccessAction
  | IGetUserErrorAction
  | ISearchUserPendingAction
  | ISearchUserSuccessAction
  | ISearchUserErrorAction
  | IDeleteUserPendingAction
  | IDeleteUserSuccessAction
  | IDeleteUserErrorAction
  | IGetAllUsersPendingAction
  | IGetAllUsersSuccessAction
  | IGetAllUsersErrorAction
  | IChangeUserStatusPendingAction
  | IChangeUserStatusSuccessAction
  | IChangeUserStatusErrorAction;

// =============================================================================

export const getUserPendingAction = (): IGetUserPendingAction => ({
  type: GET_USER_PENDING,
});

export const getUserSuccessAction = (data: IUsers): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  data,
});

export const getUserErrorAction = (error: AxiosError): IGetUserErrorAction => ({
  type: GET_USER_ERROR,
  error,
});

export const getUser =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(getUserPendingAction());

      const { data } = await api.get(`/user/admin/user/${id}`);

      dispatch(getUserSuccessAction(data));
    } catch (error) {
      dispatch(getUserErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const searchUserPendingAction = (): ISearchUserPendingAction => ({
  type: SEARCH_USER_PENDING,
});

export const searchUserSuccessAction = (
  data: IUsers,
): ISearchUserSuccessAction => ({
  type: SEARCH_USER_SUCCESS,
  data,
});

export const searchUserErrorAction = (
  error: AxiosError,
): ISearchUserErrorAction => ({
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

      //! FILTERS WILL NOT BE DEVELOPED
      const data = {};
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(searchUserSuccessAction(data as any));
    } catch (error) {
      dispatch(searchUserErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const deleteUserPendingAction = (): IDeleteUserPendingAction => ({
  type: DELETE_USER_PENDING,
});

export const deleteUserSuccessAction = (
  data: IUsers,
): IDeleteUserSuccessAction => ({
  type: DELETE_USER_SUCCESS,
  data,
});

export const deleteUserErrorAction = (
  error: AxiosError,
): IDeleteUserErrorAction => ({
  type: DELETE_USER_ERROR,
  error,
});

export const deleteUser =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(deleteUserPendingAction());

      const { data } = await api.delete(`/user/admin/user/${id}`);

      dispatch(deleteUserSuccessAction(data));
      toast.success(AlertMessage.deleted('usuario'));
    } catch (error) {
      dispatch(deleteUserErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllUserPendingAction = (): IGetAllUsersPendingAction => ({
  type: GET_ALL_USERS_PENDING,
});

export const getAllUserSuccessAction = (
  data: IUsers,
): IGetAllUsersSuccessAction => ({
  type: GET_ALL_USERS_SUCCESS,
  data,
});

export const getAllUserErrorAction = (
  error: AxiosError,
): IGetAllUsersErrorAction => ({
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

      const limitQuery = limit ? `?limit=${limit}` : '';
      const { data } = await api.get(`/user/admin/user${limitQuery}`);

      dispatch(getAllUserSuccessAction(data));
    } catch (error) {
      dispatch(getAllUserErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const changeUserStatusPendingAction =
  (): IChangeUserStatusPendingAction => ({
    type: CHANGE_USER_STATUS_PENDING,
  });

export const changeUserStatusSuccessAction = (
  data: IUsers,
): IChangeUserStatusSuccessAction => ({
  type: CHANGE_USER_STATUS_SUCCESS,
  data,
});

export const changeUserStatusErrorAction = (
  error: AxiosError,
): IChangeUserStatusErrorAction => ({
  type: CHANGE_USER_STATUS_ERROR,
  error,
});

export const changeUserStatus =
  (id: TElementId, user: TUser): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(changeUserStatusPendingAction());

      const { data } = await api.put(`/user/admin/user/${id}`, { user });

      const newData = {
        ...data,
        isBanned: user.isBanned,
      };

      dispatch(changeUserStatusSuccessAction(newData));
      toast.success(AlertMessage.updated('estatus'));
    } catch (error) {
      dispatch(changeUserStatusErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
