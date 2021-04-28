import { IUser } from '@student_life/common';
import { AxiosError } from 'axios';

import { IUserAction } from '@/store/actions/user';
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

export interface IState {
  user: IUser;
  isFetching: boolean;
  error: AxiosError | null;
  credentials: ILoginResponse | null;
}

const initialState: IState = {
  user: {} as IUser,
  isFetching: false,
  error: null,
  credentials: null,
};

const reducer = (
  state: IState = initialState,
  payload: IUserAction,
): IState => {
  switch (payload.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        user: {} as IUser,
        error: null,
        credentials: null,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {} as IUser,
        isFetching: false,
        error: null,
        credentials: payload.data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: {} as IUser,
        isFetching: false,
        credentials: null,
        error: payload.error,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case FETCH_USER_PEDING:
      return {
        ...state,
        user: {} as IUser,
        error: null,
        isFetching: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: payload.data,
        isFetching: false,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: {} as IUser,
        error: payload.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
