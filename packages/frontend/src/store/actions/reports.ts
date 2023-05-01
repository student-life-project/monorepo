import { IReport } from '@student_life/common';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { api } from '@/services/api';
import { TRootState } from '@/store/reducers';
import {
  CREATE_REPORT_ERROR,
  CREATE_REPORT_PENDING,
  CREATE_REPORT_SUCCESS,
} from '@/store/types/reports';

interface ICreateReportPendingAction {
  type: typeof CREATE_REPORT_PENDING;
}

interface ICreateReportSuccessAction {
  type: typeof CREATE_REPORT_SUCCESS;
  data: IReport;
}

interface ICreateReportErrorAction {
  type: typeof CREATE_REPORT_ERROR;
  error: AxiosError;
}

export type TReportsAction =
  | ICreateReportPendingAction
  | ICreateReportSuccessAction
  | ICreateReportErrorAction;

export const createReportPendingAction = (): ICreateReportPendingAction => ({
  type: CREATE_REPORT_PENDING,
});

export const createReportSuccessAction = (
  data: IReport,
): ICreateReportSuccessAction => ({
  type: CREATE_REPORT_SUCCESS,
  data,
});

export const createReportErrorAction = (
  error: AxiosError,
): ICreateReportErrorAction => ({
  type: CREATE_REPORT_ERROR,
  error,
});

export const createReport =
  (
    report: IReport | any,
  ): ThunkAction<void, TRootState, unknown, TReportsAction> =>
  async (dispatch) => {
    try {
      dispatch(createReportPendingAction());
      const { data } = await api.post('/report', { report });

      dispatch(createReportSuccessAction(data));
      toast.success(AlertMessage.created('reporte'));
    } catch (error) {
      dispatch(createReportErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };
