import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
import {
  // CREATE_COMMENT,
  // DELETE_COMMENT,
  // GET_ALL_COMMENT_PENDING,
  GET_ALL_COMMENTS,
  // GET_COMMENT,
  GET_COMMENT_ERROR,
  GET_COMMENT_PENDING,
  GET_COMMENT_SUCCESS,
  // UPDATE_COMMENT,
} from '@/store/types/comment';
import { IQueryCommonFilters, TElementId } from '@/types';

// =============================================================================

export const getCommentPendingAction = (): any => ({
  type: GET_COMMENT_PENDING,
});

export const getCommnetSuccessAction = (data: unknown): any => ({
  type: GET_COMMENT_SUCCESS,
  data,
});

export const getCommentErrorAction = (error: AxiosError): any => ({
  type: GET_COMMENT_ERROR,
  error,
});

export const getComment =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(getCommentPendingAction());

      // const { data } = await api.get(`/comment/${id}`);
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id); // TODO: Eliminar

      dispatch(getCommnetSuccessAction(data));
    } catch (error) {
      dispatch(getCommentErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllComment =
  ({ limit }: IQueryCommonFilters = {}) =>
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async (dispatch) => {
    try {
      // const limitQuery = limit ? `?limit=${limit}` : '';
      // const { data } = await api.get(`/comment${limitQuery}`);
      const data = {};
      // eslint-disable-next-line no-console
      console.log(limit); // TODO: Eliminar

      dispatch({ type: GET_ALL_COMMENTS, data });
    } catch (error) {
      console.error(error);
    }
  };

// =============================================================================

/*
    const { data } = await api.post<ILoginResponse>('/login', {
      email: credentials.email,
      password: credentials.password,
    });
    */

// =============================================================================
