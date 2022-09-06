import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
import { TElementId } from '@/types';

import {
  GET_ME_ERROR,
  GET_ME_PENDING,
  GET_ME_SUCCESS,
  UPDATE_ME_ERROR,
  UPDATE_ME_PENDING,
  UPDATE_ME_SUCCESS,
} from '../types/profile';

// =============================================================================

export const getMePendingAction = (): any => ({
  type: GET_ME_PENDING,
});

export const getMeSuccessAction = (data: unknown): any => ({
  type: GET_ME_SUCCESS,
  data,
});

export const getMeErrorAction = (error: AxiosError): any => ({
  type: GET_ME_ERROR,
  error,
});

export const getMe =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(getMePendingAction());

      // TODO: Eliminar
      // const { data } = await api.get(`/me/${id}`);
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(getMeSuccessAction(data));
    } catch (error) {
      dispatch(getMeErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const updateMePendingAction = (): any => ({
  type: UPDATE_ME_PENDING,
});

export const updateMeSuccessAction = (data: unknown): any => ({
  type: UPDATE_ME_SUCCESS,
  data,
});

export const updateMeErrorAction = (error: AxiosError): any => ({
  type: UPDATE_ME_ERROR,
  error,
});

export const updateMe =
  (id: TElementId, me: unknown): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(updateMePendingAction());
      // const { data } = await api.put(`/me/${id}`, { me });

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id, me);

      dispatch(updateMeSuccessAction(data));
      toast.success(AlertMessage.updated('perfil'));
    } catch (error) {
      dispatch(updateMeErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
