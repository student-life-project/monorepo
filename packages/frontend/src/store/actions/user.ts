import { EUserType, IUser } from '@student_life/common';
import { AxiosError } from 'axios';
import Cookie from 'js-cookie';
import { ThunkAction } from 'redux-thunk';

// import { api } from '@/services/api';
import { TRootState } from '@/store/reducers';
import {
  FETCH_USER_FAILURE,
  FETCH_USER_PEDING,
  FETCH_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT,
} from '@/store/types/user';
import { ILoginResponse } from '@/types';

interface ILoginCredentials {
  email: string;
  password: string;
  rememberUser?: boolean;
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

export type IUserAction =
  | ILoginPendingAction
  | ILoginSuccessAction
  | ILoginFailureAction
  | ILogoutAction
  | IFetchUserDataPendingAction
  | IFetchUserDataSuccessAction
  | IFetchUserDataFailureAction;

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

export const login = (
  credentials: ILoginCredentials,
): ThunkAction<void, TRootState, unknown, IUserAction> => async (dispatch) => {
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

export const fetchUserData = (
  userId: string,
): ThunkAction<void, TRootState, unknown, IUserAction> => async (dispatch) => {
  try {
    dispatch(fetchUserDataPendingAction());

    // const {data} = await api.get<IUser>(`/users/${userId}`);

    const data: IUser = {
      firstName: `fulanito ${userId}`,
      email: `email_${userId}@email.com`,
      type: EUserType.OWNER,
    } as IUser;

    dispatch(fetchUserDataSuccessAction(data));
  } catch (error) {
    dispatch(fetchUserDataFailureAction(error));
  }
};
