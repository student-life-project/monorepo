import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
import {
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_PENDING,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  DELETE_COMMENT_SUCCESS,
  GET_ALL_COMMENTS_ERROR,
  GET_ALL_COMMENTS_PENDING,
  GET_ALL_COMMENTS_SUCCESS,
  GET_COMMENT_ERROR,
  GET_COMMENT_PENDING,
  GET_COMMENT_SUCCESS,
  UPDATE_COMMENT_ERROR,
  UPDATE_COMMENT_PENDING,
  UPDATE_COMMENT_SUCCESS,
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

      // TODO: Eliminar
      // const { data } = await api.get(`/comment/${id}`);
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(getCommnetSuccessAction(data));
    } catch (error) {
      dispatch(getCommentErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const createCommentPendingAction = (): any => ({
  type: CREATE_COMMENT_PENDING,
});

export const createCommentSuccessAction = (data: unknown): any => ({
  type: CREATE_COMMENT_SUCCESS,
  data,
});

export const createCommentErrorAction = (error: AxiosError): any => ({
  type: CREATE_COMMENT_ERROR,
  error,
});

export const createComment =
  (comment: unknown): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(createCommentPendingAction());
      // const { data } = await api.post('/comment', { comment });

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(comment);

      dispatch(createCommentSuccessAction(data));
      toast.success(AlertMessage.created('comentario'));
    } catch (error) {
      dispatch(createCommentErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const updateCommentPendingAction = (): any => ({
  type: UPDATE_COMMENT_PENDING,
});

export const updateCommentSuccessAction = (data: unknown): any => ({
  type: UPDATE_COMMENT_SUCCESS,
  data,
});

export const updateCommentErrorAction = (error: AxiosError): any => ({
  type: UPDATE_COMMENT_ERROR,
  error,
});

export const updateComment =
  (
    id: TElementId,
    comment: unknown,
  ): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(createCommentPendingAction());
      // const { data } = await api.put(`/comment/${id}`, { comment });

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id, comment);

      dispatch(createCommentSuccessAction(data));
      toast.success(AlertMessage.updated('comentario'));
    } catch (error) {
      dispatch(createCommentErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const deleteCommentPendingAction = (): any => ({
  type: DELETE_COMMENT_SUCCESS,
});

export const deleteCommentSuccessAction = (data: unknown): any => ({
  type: DELETE_COMMENT_SUCCESS,
  data,
});

export const deleteCommentErrorAction = (error: AxiosError): any => ({
  type: DELETE_COMMENT_ERROR,
  error,
});

export const deleteComment =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(createCommentPendingAction());
      // const { data } = await api.delete(`/comment/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(createCommentSuccessAction(data));
      toast.success(AlertMessage.deleted('comentario'));
    } catch (error) {
      dispatch(createCommentErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllCommentsPendingAction = (): any => ({
  type: GET_ALL_COMMENTS_PENDING,
});

export const getAllCommentsSuccessAction = (data: unknown): any => ({
  type: GET_ALL_COMMENTS_SUCCESS,
  data,
});

export const getAllCommentsErrorAction = (error: AxiosError): any => ({
  type: GET_ALL_COMMENTS_ERROR,
  error,
});

export const getAllComments =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    any
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllCommentsPendingAction());
      // const limitQuery = limit ? `?limit=${limit}` : '';
      // const { data } = await api.get(`/comment${limitQuery}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(limit);

      dispatch(getAllCommentsSuccessAction(data));
    } catch (error) {
      dispatch(getAllCommentsErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================