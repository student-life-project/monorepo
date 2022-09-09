import { AxiosError } from 'axios';

import {
  CREATE_REPORT_ERROR,
  CREATE_REPORT_PENDING,
  CREATE_REPORT_SUCCESS,
} from '@/store/types/report';

export interface IState {
  report: any;
  isFetching: boolean;
  error: AxiosError | null;
}

const initialState: IState = {
  report: {},
  isFetching: false,
  error: null,
};

const reducer = (
  state: IState = initialState,
  payload: { type: any; data: any; error: any },
): IState => {
  switch (payload.type) {
    case CREATE_REPORT_ERROR:
      return {
        ...state,
        report: {},
        isFetching: true,
        error: null,
      };
    case CREATE_REPORT_PENDING:
      return {
        ...state,
        report: payload.data,
        isFetching: false,
        error: null,
      };
    case CREATE_REPORT_SUCCESS:
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
