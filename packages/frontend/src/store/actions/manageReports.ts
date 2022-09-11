import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
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
import { IQueryCommonFilters, TElementId } from '@/types';

// TODO: ELIMINAR
import { dataReports } from '../dataFakeTemp';

// =============================================================================

export const getReportPendingAction = (): any => ({
  type: GET_REPORT_PENDING,
});

export const getReportSuccessAction = (data: unknown): any => ({
  type: GET_REPORT_SUCCESS,
  data,
});

export const getReportErrorAction = (error: AxiosError): any => ({
  type: GET_REPORT_ERROR,
  error,
});

export const getReport =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(getReportPendingAction());
      // const { data } = await api.get(`/report/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(getReportSuccessAction(data));
    } catch (error) {
      dispatch(getReportErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const searchReportPendingAction = (): any => ({
  type: SEARCH_REPORT_PENDING,
});

export const searchReportSuccessAction = (data: unknown): any => ({
  type: SEARCH_REPORT_SUCCESS,
  data,
});

export const searchReportErrorAction = (error: AxiosError): any => ({
  type: SEARCH_REPORT_ERROR,
  error,
});

export const searchReport =
  (text = ''): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(searchReportPendingAction());
      // const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      // const { data } = await api.get(`/report${filter}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(searchReportSuccessAction(data));
    } catch (error) {
      dispatch(searchReportErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const deleteReportPendingAction = (): any => ({
  type: DELETE_REPORT_PENDING,
});

export const deleteReportSuccessAction = (data: unknown): any => ({
  type: DELETE_REPORT_SUCCESS,
  data,
});

export const deleteReportErrorAction = (error: AxiosError): any => ({
  type: DELETE_REPORT_ERROR,
  error,
});

export const deleteReport =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(deleteReportPendingAction());
      // const { data } = await api.delete(`/report/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(deleteReportSuccessAction(data));
      toast.success(AlertMessage.deleted('reporte'));
    } catch (error) {
      dispatch(deleteReportErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllReportsPendingAction = (): any => ({
  type: GET_ALL_REPORTS_PENDING,
});

export const getAllReportsSuccessAction = (data: unknown): any => ({
  type: GET_ALL_REPORTS_SUCCESS,
  data,
});

export const getAllReportsErrorAction = (error: AxiosError): any => ({
  type: GET_ALL_REPORTS_ERROR,
  error,
});

export const getAllReports =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    any
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllReportsPendingAction());
      // const limitQuery = limit ? `?limit=${limit}` : '';
      // const { data } = await api.get(`/report${limitQuery}`);

      // TODO: Eliminar
      const data = dataReports;
      // eslint-disable-next-line no-console
      console.log(limit);

      dispatch(getAllReportsSuccessAction(data));
    } catch (error) {
      dispatch(getAllReportsErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const changeReportStatusPendingAction = (): any => ({
  type: CHANGE_REPORT_STATUS_PENDING,
});

export const changeReportStatusSuccessAction = (data: unknown): any => ({
  type: CHANGE_REPORT_STATUS_SUCCESS,
  data,
});

export const changeReportStatusErrorAction = (error: AxiosError): any => ({
  type: CHANGE_REPORT_STATUS_ERROR,
  error,
});

export const changeReport =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(changeReportStatusPendingAction());
      // const { data } = await api.put(`/report/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(changeReportStatusSuccessAction(data));
      toast.success(AlertMessage.updated('estatus'));
    } catch (error) {
      dispatch(changeReportStatusErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
