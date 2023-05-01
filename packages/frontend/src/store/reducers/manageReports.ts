import { IReport } from '@student_life/common';
import { AxiosError } from 'axios';

import {
  CHANGE_REPORT_STATUS_ERROR,
  CHANGE_REPORT_STATUS_PENDING,
  CHANGE_REPORT_STATUS_SUCCESS,
  DELETE_REPORT_ERROR,
  DELETE_REPORT_PENDING,
  DELETE_REPORT_SUCCESS,
  GET_ALL_REPORTS_ERROR,
  GET_ALL_REPORTS_PENDING,
  GET_ALL_REPORTS_SUCCESS,
  GET_REPORT_ERROR,
  GET_REPORT_PENDING,
  GET_REPORT_SUCCESS,
  SEARCH_REPORT_ERROR,
  SEARCH_REPORT_PENDING,
  SEARCH_REPORT_SUCCESS,
} from '@/store/types/manageReports';

import { TReportsAction } from '../actions/manageReports';

export interface IState {
  report: IReport | any;
  reports: IReport[] | any;
  isFetching: boolean;
  error: AxiosError | null;
}

const initialState: IState = {
  report: null,
  reports: [],
  isFetching: false,
  error: null,
};

const reducer = (
  state: IState = initialState,
  payload: TReportsAction,
): IState => {
  switch (payload.type) {
    case GET_REPORT_PENDING:
      return {
        ...state,
        report: null,
        isFetching: true,
        error: null,
      };
    case GET_REPORT_SUCCESS:
      return {
        ...state,
        report: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_REPORT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case SEARCH_REPORT_PENDING:
      return {
        ...state,
        reports: [],
        isFetching: true,
        error: null,
      };
    case SEARCH_REPORT_SUCCESS:
      return {
        ...state,
        reports: payload.data,
        isFetching: false,
        error: null,
      };
    case SEARCH_REPORT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case DELETE_REPORT_PENDING:
      return {
        ...state,
        report: null,
        isFetching: true,
        error: null,
      };
    case DELETE_REPORT_SUCCESS:
      return {
        ...state,
        report: payload.data,
        isFetching: false,
        error: null,
      };
    case DELETE_REPORT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case GET_ALL_REPORTS_PENDING:
      return {
        ...state,
        reports: [],
        isFetching: true,
        error: null,
      };
    case GET_ALL_REPORTS_SUCCESS:
      return {
        ...state,
        reports: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_ALL_REPORTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case CHANGE_REPORT_STATUS_PENDING:
      return {
        ...state,
        report: {},
        isFetching: true,
        error: null,
      };
    case CHANGE_REPORT_STATUS_SUCCESS:
      return {
        ...state,
        report: payload.data,
        isFetching: false,
        error: null,
      };
    case CHANGE_REPORT_STATUS_ERROR:
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
