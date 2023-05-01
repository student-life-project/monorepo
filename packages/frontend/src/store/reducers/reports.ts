import { IReport } from '@student_life/common';
import { AxiosError } from 'axios';

import {
  CREATE_REPORT_ERROR,
  CREATE_REPORT_PENDING,
  CREATE_REPORT_SUCCESS,
} from '@/store/types/reports';

import { TReportsAction } from '../actions/reports';

export interface IState {
  report: IReport | null;
  isFetching: boolean;
  error: AxiosError | null;
}

const initialState: IState = {
  report: null,
  isFetching: false,
  error: null,
};

const reducer = (
  state: IState = initialState,
  payload: TReportsAction,
): IState => {
  switch (payload.type) {
    case CREATE_REPORT_ERROR:
      return {
        ...state,
        report: initialState.report,
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
