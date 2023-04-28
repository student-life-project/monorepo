import { IUser } from '@student_life/common';
import { AxiosError } from 'axios';

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
import { IUsers } from '@/types';

import { TUsersAction } from '../actions/manageUsers';

export interface IState {
  users: IUsers;
  user: IUser | null | any;
  isFetching: boolean;
  error: AxiosError | null;
}

const initialState: IState = {
  users: {
    count: 0,
    current: 0,
    data: [],
    next: 0,
    prev: 0,
  },
  user: null,
  isFetching: false,
  error: null,
};

const reducer = (
  state: IState = initialState,
  payload: TUsersAction,
): IState => {
  switch (payload.type) {
    case GET_USER_PENDING:
      return {
        ...state,
        user: null,
        isFetching: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case SEARCH_USER_PENDING:
      return {
        ...state,
        users: initialState.users,
        isFetching: true,
        error: null,
      };
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        users: payload.data,
        isFetching: false,
        error: null,
      };
    case SEARCH_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case DELETE_USER_PENDING:
      return {
        ...state,
        user: null,
        isFetching: true,
        error: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        user: payload.data,
        isFetching: false,
        error: null,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case GET_ALL_USERS_PENDING:
      return {
        ...state,
        users: initialState.users,
        isFetching: true,
        error: null,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_ALL_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case CHANGE_USER_STATUS_PENDING:
      return {
        ...state,
        user: null,
        isFetching: true,
        error: null,
      };
    case CHANGE_USER_STATUS_SUCCESS:
      return {
        ...state,
        user: payload.data,
        isFetching: false,
        error: null,
      };
    case CHANGE_USER_STATUS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
