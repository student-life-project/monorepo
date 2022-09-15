import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
import {
  CREATE_REPORT_ERROR,
  CREATE_REPORT_PENDING,
  CREATE_REPORT_SUCCESS,
} from '@/store/types/reports';

export const createReportPendingAction = (): any => ({
  type: CREATE_REPORT_PENDING,
});

export const createReportSuccessAction = (data: unknown): any => ({
  type: CREATE_REPORT_SUCCESS,
  data,
});

export const createReportErrorAction = (error: AxiosError): any => ({
  type: CREATE_REPORT_ERROR,
  error,
});

export const createReport =
  (report: unknown): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(createReportPendingAction());
      // const { data } = await api.post('/report', { report });

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(report);

      dispatch(createReportSuccessAction(data));
      toast.success(AlertMessage.created('reporte'));
    } catch (error) {
      dispatch(createReportErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };
