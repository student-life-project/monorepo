import { IReport } from '@student_life/common';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { api } from '@/services/api';
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

// =============================================================================

interface IGetReportPendingAction {
  type: typeof GET_REPORT_PENDING;
}

interface IGetReportSuccessAction {
  type: typeof GET_REPORT_SUCCESS;
  data: IReport;
}

interface IGetReportErrorAction {
  type: typeof GET_REPORT_ERROR;
  error: AxiosError;
}

interface ISearchReportPendingAction {
  type: typeof SEARCH_REPORT_PENDING;
}

interface ISearchReportSuccessAction {
  type: typeof SEARCH_REPORT_SUCCESS;
  data: IReport;
}

interface ISearchReportErrorAction {
  type: typeof SEARCH_REPORT_ERROR;
  error: AxiosError;
}

interface IDeleteReportPendingAction {
  type: typeof DELETE_REPORT_PENDING;
}

interface IDeleteReportSuccessAction {
  type: typeof DELETE_REPORT_SUCCESS;
  data: IReport;
}

interface IDeleteReportErrorAction {
  type: typeof DELETE_REPORT_ERROR;
  error: AxiosError;
}

interface IGetAllReportsPendingAction {
  type: typeof GET_ALL_REPORTS_PENDING;
}

interface IGetAllReportsSuccessAction {
  type: typeof GET_ALL_REPORTS_SUCCESS;
  data: IReport;
}

interface IGetAllReportsErrorAction {
  type: typeof GET_ALL_REPORTS_ERROR;
  error: AxiosError;
}

interface IChangeReportStatusPendingAction {
  type: typeof CHANGE_REPORT_STATUS_PENDING;
}

interface IChangeReportStatusSuccessAction {
  type: typeof CHANGE_REPORT_STATUS_SUCCESS;
  data: IReport;
}

interface IChangeReportStatusErrorAction {
  type: typeof CHANGE_REPORT_STATUS_ERROR;
  error: AxiosError;
}

export type TReportsAction =
  | IGetReportPendingAction
  | IGetReportSuccessAction
  | IGetReportErrorAction
  | ISearchReportPendingAction
  | ISearchReportSuccessAction
  | ISearchReportErrorAction
  | IDeleteReportPendingAction
  | IDeleteReportSuccessAction
  | IDeleteReportErrorAction
  | IGetAllReportsPendingAction
  | IGetAllReportsSuccessAction
  | IGetAllReportsErrorAction
  | IChangeReportStatusPendingAction
  | IChangeReportStatusSuccessAction
  | IChangeReportStatusErrorAction;

export const getReportPendingAction = (): IGetReportPendingAction => ({
  type: GET_REPORT_PENDING,
});

export const getReportSuccessAction = (
  data: IReport,
): IGetReportSuccessAction => ({
  type: GET_REPORT_SUCCESS,
  data,
});

export const getReportErrorAction = (
  error: AxiosError,
): IGetReportErrorAction => ({
  type: GET_REPORT_ERROR,
  error,
});

export const getReport =
  (id: TElementId): ThunkAction<void, TRootState, unknown, TReportsAction> =>
  async (dispatch) => {
    try {
      dispatch(getReportPendingAction());

      const { data } = await api.get(`/report/${id}`);

      dispatch(getReportSuccessAction(data));
    } catch (error) {
      dispatch(getReportErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const searchReportPendingAction = (): ISearchReportPendingAction => ({
  type: SEARCH_REPORT_PENDING,
});

export const searchReportSuccessAction = (
  data: IReport,
): ISearchReportSuccessAction => ({
  type: SEARCH_REPORT_SUCCESS,
  data,
});

export const searchReportErrorAction = (
  error: AxiosError,
): ISearchReportErrorAction => ({
  type: SEARCH_REPORT_ERROR,
  error,
});

export const searchReport =
  (text = ''): ThunkAction<void, TRootState, unknown, TReportsAction> =>
  async (dispatch) => {
    try {
      dispatch(searchReportPendingAction());
      // const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      // const { data } = await api.get(`/report${filter}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(searchReportSuccessAction(data as any));
    } catch (error) {
      dispatch(searchReportErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const deleteReportPendingAction = (): IDeleteReportPendingAction => ({
  type: DELETE_REPORT_PENDING,
});

export const deleteReportSuccessAction = (
  data: IReport,
): IDeleteReportSuccessAction => ({
  type: DELETE_REPORT_SUCCESS,
  data,
});

export const deleteReportErrorAction = (
  error: AxiosError,
): IDeleteReportErrorAction => ({
  type: DELETE_REPORT_ERROR,
  error,
});

export const deleteReport =
  (id: TElementId): ThunkAction<void, TRootState, unknown, TReportsAction> =>
  async (dispatch) => {
    try {
      dispatch(deleteReportPendingAction());

      const { data } = await api.delete(`/report/${id}`);

      dispatch(deleteReportSuccessAction(data));
      toast.success(AlertMessage.deleted('reporte'));
    } catch (error) {
      dispatch(deleteReportErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllReportsPendingAction = (): IGetAllReportsPendingAction => ({
  type: GET_ALL_REPORTS_PENDING,
});

export const getAllReportsSuccessAction = (
  data: IReport,
): IGetAllReportsSuccessAction => ({
  type: GET_ALL_REPORTS_SUCCESS,
  data,
});

export const getAllReportsErrorAction = (
  error: AxiosError,
): IGetAllReportsErrorAction => ({
  type: GET_ALL_REPORTS_ERROR,
  error,
});

export const getAllReports =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    TReportsAction
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllReportsPendingAction());

      const limitQuery = limit ? `?limit=${limit}` : '';
      const { data } = await api.get(`/report${limitQuery}`);

      dispatch(getAllReportsSuccessAction(data));
    } catch (error) {
      dispatch(getAllReportsErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const changeReportStatusPendingAction =
  (): IChangeReportStatusPendingAction => ({
    type: CHANGE_REPORT_STATUS_PENDING,
  });

export const changeReportStatusSuccessAction = (
  data: IReport,
): IChangeReportStatusSuccessAction => ({
  type: CHANGE_REPORT_STATUS_SUCCESS,
  data,
});

export const changeReportStatusErrorAction = (
  error: AxiosError,
): IChangeReportStatusErrorAction => ({
  type: CHANGE_REPORT_STATUS_ERROR,
  error,
});

export const changeReportStatus =
  (
    id: TElementId,
    report: IReport,
  ): ThunkAction<void, TRootState, unknown, TReportsAction> =>
  async (dispatch) => {
    try {
      dispatch(changeReportStatusPendingAction());
      const { data } = await api.put(`/report/${id}`, { report });

      const newData = {
        ...data,
        approved: report.approved,
      };

      dispatch(changeReportStatusSuccessAction(newData));
      toast.success(AlertMessage.updated('estatus'));
    } catch (error) {
      dispatch(changeReportStatusErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
