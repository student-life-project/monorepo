import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
import { IQueryCommonFilters, TElementId } from '@/types';

import {
  CHANGE_PUBLICATION_APPROVAL_ERROR,
  CHANGE_PUBLICATION_APPROVAL_PENDING,
  CHANGE_PUBLICATION_APPROVAL_SUCCESS,
  DELETE_PUBLICATION_ERROR,
  DELETE_PUBLICATION_PENDING,
  DELETE_PUBLICATION_SUCCESS,
  GET_ALL_PUBLICATIONS_PENDING,
  GET_ALL_PUBLICATIONS_SUCCESS,
  GET_PUBLICATION_ERROR,
  GET_PUBLICATION_PENDING,
  GET_PUBLICATION_SUCCESS,
  SEARCH_PUBLICATION_ERROR,
  SEARCH_PUBLICATION_PENDING,
  SEARCH_PUBLICATION_SUCCESS,
} from '../types/managePublication';
import { GET_ALL_PUBLICATIONS_ERROR } from '../types/publication';

// =============================================================================

export const getPublicationPendingAction = (): any => ({
  type: GET_PUBLICATION_PENDING,
});

export const getPublicationSuccessAction = (data: unknown): any => ({
  type: GET_PUBLICATION_SUCCESS,
  data,
});

export const getPublicationErrorAction = (error: AxiosError): any => ({
  type: GET_PUBLICATION_ERROR,
  error,
});

export const getPublication =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(getPublicationPendingAction());

      // TODO: Eliminar
      // const { data } = await api.get(`/publication/${id}`);
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(getPublicationSuccessAction(data));
    } catch (error) {
      dispatch(getPublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const searchPublicationPendingAction = (): any => ({
  type: SEARCH_PUBLICATION_PENDING,
});

export const searchPublicationSuccessAction = (data: unknown): any => ({
  type: SEARCH_PUBLICATION_SUCCESS,
  data,
});

export const searchPublicationErrorAction = (error: AxiosError): any => ({
  type: SEARCH_PUBLICATION_ERROR,
  error,
});

export const searchPublication =
  (text = ''): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(searchPublicationPendingAction());
      // const limitQuery = text
      //   ? `?filter=${encodeURI(JSON.stringify(text))}`
      //   : '';
      // const { data } = await api.get(`/publication${limitQuery}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(searchPublicationSuccessAction(data));
    } catch (error) {
      dispatch(searchPublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const deletePublicationPendingAction = (): any => ({
  type: DELETE_PUBLICATION_PENDING,
});

export const deletePublicationSuccessAction = (data: unknown): any => ({
  type: DELETE_PUBLICATION_SUCCESS,
  data,
});

export const deletePublicationErrorAction = (error: AxiosError): any => ({
  type: DELETE_PUBLICATION_ERROR,
  error,
});

export const deletePublication =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(deletePublicationPendingAction());
      // const { data } = await api.delete(`/publication/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(deletePublicationSuccessAction(data));
      toast.success(AlertMessage.deleted('publicación'));
    } catch (error) {
      dispatch(deletePublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllPublicationsPendingAction = (): any => ({
  type: GET_ALL_PUBLICATIONS_PENDING,
});

export const getAllPublicationsSuccessAction = (data: unknown): any => ({
  type: GET_ALL_PUBLICATIONS_SUCCESS,
  data,
});

export const getAllPublicationsErrorAction = (error: AxiosError): any => ({
  type: GET_ALL_PUBLICATIONS_ERROR,
  error,
});

export const getAllPublications =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    any
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllPublicationsPendingAction());
      // const limitQuery = limit ? `?limit=${limit}` : '';
      // const { data } = await api.get(`/publication${limitQuery}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(limit);

      dispatch(getAllPublicationsSuccessAction(data));
    } catch (error) {
      dispatch(getAllPublicationsErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const changePublicationPendingAction = (): any => ({
  type: CHANGE_PUBLICATION_APPROVAL_PENDING,
});

export const changePublicationSuccessAction = (data: unknown): any => ({
  type: CHANGE_PUBLICATION_APPROVAL_SUCCESS,
  data,
});

export const changePublicationErrorAction = (error: AxiosError): any => ({
  type: CHANGE_PUBLICATION_APPROVAL_ERROR,
  error,
});

export const changePublication =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(changePublicationPendingAction());
      // const { data } = await api.put(`/publication/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(changePublicationSuccessAction(data));
      toast.success(AlertMessage.updated('aprobación'));
    } catch (error) {
      dispatch(changePublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
