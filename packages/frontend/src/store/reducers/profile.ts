import { AxiosError } from 'axios';

import {
  GET_ME_ERROR,
  GET_ME_PENDING,
  GET_ME_SUCCESS,
  UPDATE_ME_ERROR,
  UPDATE_ME_PENDING,
  UPDATE_ME_SUCCESS,
} from '@/store/types/profile';

export interface IState {
  me: any;
  isFetching: boolean;
  error: AxiosError | null;
}

const initialState: IState = {
  me: {},
  isFetching: false,
  error: null,
};

const reducer = (
  state: IState = initialState,
  payload: { type: any; data: any; error: any },
): IState => {
  switch (payload.type) {
    case GET_ME_PENDING:
      return {
        ...state,
        me: {},
        isFetching: true,
        error: null,
      };
    case GET_ME_SUCCESS:
      return {
        ...state,
        me: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_ME_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case UPDATE_ME_PENDING:
      return {
        ...state,
        me: {},
        isFetching: true,
        error: null,
      };
    case UPDATE_ME_SUCCESS:
      return {
        ...state,
        me: payload.data,
        isFetching: false,
        error: null,
      };
    case UPDATE_ME_ERROR:
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
