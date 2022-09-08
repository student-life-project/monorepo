import { AxiosError } from 'axios';

import {
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_PENDING,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  DELETE_COMMENT_PENDING,
  DELETE_COMMENT_SUCCESS,
  GET_ALL_COMMENTS_ERROR,
  GET_ALL_COMMENTS_PENDING,
  GET_ALL_COMMENTS_SUCCESS,
  GET_COMMENT_ERROR,
  GET_COMMENT_PENDING,
  GET_COMMENT_SUCCESS,
  UPDATE_COMMENT_ERROR,
  UPDATE_COMMENT_PENDING,
  UPDATE_COMMENT_SUCCESS,
} from '@/store/types/comment';

export interface IState {
  comments: any;
  comment: any;
  isFetching: boolean;
  error: AxiosError | null;
}

const initialState: IState = {
  comments: [],
  comment: {},
  isFetching: false,
  error: null,
};

const reducer = (
  state: IState = initialState,
  payload: { type: any; data: any; error: any },
): IState => {
  switch (payload.type) {
    case GET_COMMENT_PENDING:
      return {
        ...state,
        comment: {},
        isFetching: true,
        error: null,
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_COMMENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case CREATE_COMMENT_PENDING:
      return {
        ...state,
        comment: {},
        isFetching: true,
        error: null,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comment: payload.data,
        isFetching: false,
        error: null,
      };
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case UPDATE_COMMENT_PENDING:
      return {
        ...state,
        comment: {},
        isFetching: true,
        error: null,
      };
    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        comment: payload.data,
        isFetching: false,
        error: null,
      };
    case UPDATE_COMMENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case DELETE_COMMENT_PENDING:
      return {
        ...state,
        comment: {},
        isFetching: true,
        error: null,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comment: payload.data,
        isFetching: false,
        error: null,
      };
    case DELETE_COMMENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case GET_ALL_COMMENTS_PENDING:
      return {
        ...state,
        comments: [],
        isFetching: true,
        error: null,
      };
    case GET_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_ALL_COMMENTS_ERROR:
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
