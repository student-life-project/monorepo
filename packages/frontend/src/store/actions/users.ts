import { EUserType, IUser } from '@student_life/common';
import { AxiosError } from 'axios';
import Cookie from 'js-cookie';
import { ThunkAction } from 'redux-thunk';

import { api } from '@/services/api';
import { TRootState } from '@/store/reducers';
import {
  FETCH_USER_FAILURE,
  FETCH_USER_PEDING,
  FETCH_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_PENDING,
  REGISTER_USER_SUCCESS,
} from '@/store/types/users';
import { ILoginResponse, IRegisterResponse } from '@/types';

interface ILoginCredentials {
  email: string;
  password: string;
  rememberUser?: boolean;
}

interface IRegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: EUserType;
}

interface ILoginPendingAction {
  type: typeof LOGIN_PENDING;
}

interface ILoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  data: ILoginResponse;
}

interface ILoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: AxiosError;
}
interface ILogoutAction {
  type: typeof LOGOUT;
}

interface IFetchUserDataPendingAction {
  type: typeof FETCH_USER_PEDING;
}

interface IFetchUserDataSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  data: IUser;
}

interface IFetchUserDataFailureAction {
  type: typeof FETCH_USER_FAILURE;
  error: AxiosError;
}

interface IRegisterUserPendingAction {
  type: typeof REGISTER_USER_PENDING;
}

interface IRegisterUserSuccessAction {
  type: typeof REGISTER_USER_SUCCESS;
  data: IRegisterResponse;
}

interface IRegisterUserFailureAction {
  type: typeof REGISTER_USER_FAILURE;
  error: AxiosError;
}

export type IUserAction =
  | ILoginPendingAction
  | ILoginSuccessAction
  | ILoginFailureAction
  | ILogoutAction
  | IFetchUserDataPendingAction
  | IFetchUserDataSuccessAction
  | IFetchUserDataFailureAction
  | IRegisterUserFailureAction
  | IRegisterUserPendingAction
  | IRegisterUserSuccessAction;

export const loginPendingAction = (): ILoginPendingAction => ({
  type: LOGIN_PENDING,
});

export const loginSuccessAction = (
  credentials: ILoginResponse,
): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  data: credentials,
});

export const loginFailureAction = (error: AxiosError): ILoginFailureAction => ({
  type: LOGIN_FAILURE,
  error,
});

export const login =
  (
    credentials: ILoginCredentials,
  ): ThunkAction<void, TRootState, unknown, IUserAction> =>
  async (dispatch) => {
    try {
      dispatch(loginPendingAction());

      /*
    const { data } = await api.post<ILoginResponse>('/login', {
      email: credentials.email,
      password: credentials.password,
    });
    */
      const exdate = new Date();
      exdate.setDate(exdate.getDate() + 5);
      const data: ILoginResponse = {
        expiration: exdate.toUTCString(),
        token: 'ABCD',
        userId: '1',
      };

      if (credentials.rememberUser) {
        Cookie.set('token', data.token, {
          expires: new Date(data.expiration),
          secure: process.env.NODE_ENV !== 'development',
          path: '/',
          // httpOnly: true,
        });

        Cookie.set('userId', data.userId, {
          expires: new Date(data.expiration),
          secure: process.env.NODE_ENV !== 'development',
          path: '/',
          // httpOnly: true,
        });
      }

      dispatch(loginSuccessAction(data));
    } catch (error) {
      console.error(error);
      dispatch(loginFailureAction(error));
    }
  };

export const logoutAction = (): ILogoutAction => {
  Cookie.remove('token');
  Cookie.remove('userId');

  return {
    type: LOGOUT,
  };
};

export const fetchUserDataPendingAction = (): IFetchUserDataPendingAction => ({
  type: FETCH_USER_PEDING,
});

export const fetchUserDataSuccessAction = (
  userData: IUser,
): IFetchUserDataSuccessAction => ({
  type: FETCH_USER_SUCCESS,
  data: userData,
});

export const fetchUserDataFailureAction = (
  error: AxiosError,
): IFetchUserDataFailureAction => ({
  type: FETCH_USER_FAILURE,
  error,
});

export const fetchUserData =
  (): ThunkAction<void, TRootState, unknown, IUserAction> =>
  async (dispatch) => {
    try {
      dispatch(fetchUserDataPendingAction());
      const { data } = await api.get<IUser>(`/user/profile`);

      dispatch(fetchUserDataSuccessAction(data));
    } catch (error) {
      dispatch(fetchUserDataFailureAction(error));
    }
  };

export const registerUserPending = (): IRegisterUserPendingAction => ({
  type: REGISTER_USER_PENDING,
});

export const registerUserSuccess = (
  data: IRegisterResponse,
): IRegisterUserSuccessAction => ({
  type: REGISTER_USER_SUCCESS,
  data,
});

export const registerUserFailure = (
  error: AxiosError,
): IRegisterUserFailureAction => ({
  type: REGISTER_USER_FAILURE,
  error,
});

export const registerUser =
  (
    credentials: IRegisterCredentials,
  ): ThunkAction<void, TRootState, unknown, IUserAction> =>
  async (dispatch) => {
    try {
      dispatch(registerUserPending());

      /*
    const { data } = await api.post<IRegisterResponse>('/register', {
      ...credentials,
    });
    */

      const exdate = new Date();
      exdate.setDate(exdate.getDate() + 5);

      const data: IRegisterResponse = {
        expiration: exdate.toUTCString(),
        token: 'ABCD',
        userId: '1',
        userData: {
          email: credentials.email,
          firstName: credentials.firstName,
          password: credentials.password,
          type: credentials.userType,
        } as IUser,
      };

      Cookie.set('token', data.token, {
        expires: new Date(data.expiration),
        secure: process.env.NODE_ENV !== 'development',
        path: '/',
        // httpOnly: true,
      });

      Cookie.set('userId', data.userId, {
        expires: new Date(data.expiration),
        secure: process.env.NODE_ENV !== 'development',
        path: '/',
        // httpOnly: true,
      });

      dispatch(registerUserSuccess(data));
    } catch (error) {
      dispatch(registerUserFailure(error));
    }
  };
