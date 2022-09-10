import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
import {
  CHANGE_PUBLICATION_AVAILABILITY_ERROR,
  CHANGE_PUBLICATION_AVAILABILITY_PENDING,
  CHANGE_PUBLICATION_AVAILABILITY_SUCCESS,
  CREATE_PUBLICATION_ERROR,
  CREATE_PUBLICATION_PENDING,
  CREATE_PUBLICATION_SUCCESS,
  DELETE_PUBLICATION_ERROR,
  DELETE_PUBLICATION_PENDING,
  DELETE_PUBLICATION_SUCCESS,
  GET_ALL_PUBLICATIONS_ERROR,
  GET_ALL_PUBLICATIONS_PENDING,
  GET_ALL_PUBLICATIONS_SUCCESS,
  GET_PUBLICATION_ERROR,
  GET_PUBLICATION_PENDING,
  GET_PUBLICATION_SUCCESS,
  SEARCH_PUBLICATION_ERROR,
  SEARCH_PUBLICATION_PENDING,
  SEARCH_PUBLICATION_SUCCESS,
  UPDATE_PUBLICATION_ERROR,
  UPDATE_PUBLICATION_PENDING,
  UPDATE_PUBLICATION_SUCCESS,
} from '@/store/types/publications';
import { IQueryCommonFilters, TElementId } from '@/types';

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
      // const { data } = await api.get(`/publication/${id}`);

      // TODO: Eliminar
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

export const createPublicationPendingAction = (): any => ({
  type: CREATE_PUBLICATION_PENDING,
});

export const createPublicationSuccessAction = (data: unknown): any => ({
  type: CREATE_PUBLICATION_SUCCESS,
  data,
});

export const createPublicationErrorAction = (error: AxiosError): any => ({
  type: CREATE_PUBLICATION_ERROR,
  error,
});

export const createPublication =
  (publication: unknown): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(createPublicationPendingAction());
      // const { data } = await api.post('/publication', { publication });

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(publication);

      dispatch(createPublicationSuccessAction(data));
      toast.success(AlertMessage.created('publicación'));
    } catch (error) {
      dispatch(createPublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const updatePublicationPendingAction = (): any => ({
  type: UPDATE_PUBLICATION_PENDING,
});

export const updatePublicationSuccessAction = (data: unknown): any => ({
  type: UPDATE_PUBLICATION_SUCCESS,
  data,
});

export const updatePublicationErrorAction = (error: AxiosError): any => ({
  type: UPDATE_PUBLICATION_ERROR,
  error,
});

export const updatePublication =
  (
    id: TElementId,
    publication: unknown,
  ): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(updatePublicationPendingAction());
      // const { data } = await api.put(`/publication/${id}`, { publication });

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id, publication);

      dispatch(updatePublicationSuccessAction(data));
      toast.success(AlertMessage.updated('publicación'));
    } catch (error) {
      dispatch(updatePublicationErrorAction(error));
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

export const getAllPublicationPendingAction = (): any => ({
  type: GET_ALL_PUBLICATIONS_PENDING,
});

export const getAllPublicationSuccessAction = (data: unknown): any => ({
  type: GET_ALL_PUBLICATIONS_SUCCESS,
  data,
});

export const getAllPublicationErrorAction = (error: AxiosError): any => ({
  type: GET_ALL_PUBLICATIONS_ERROR,
  error,
});

export const getAllPublication =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    any
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllPublicationPendingAction());
      // const limitQuery = limit ? `?limit=${limit}` : '';
      // const { data } = await api.get(`/publication${limitQuery}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(limit);

      dispatch(getAllPublicationSuccessAction(data));
    } catch (error) {
      dispatch(getAllPublicationErrorAction(error));
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
      // const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      // const { data } = await api.get(`/publication${filter}`);

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

export const changePublicationAvailabilityPendingAction = (): any => ({
  type: CHANGE_PUBLICATION_AVAILABILITY_PENDING,
});

export const changePublicationAvailabilitySuccessAction = (
  data: unknown,
): any => ({
  type: CHANGE_PUBLICATION_AVAILABILITY_SUCCESS,
  data,
});

export const changePublicationAvailabilityErrorAction = (
  error: AxiosError,
): any => ({
  type: CHANGE_PUBLICATION_AVAILABILITY_ERROR,
  error,
});

export const changePublicationAvailability =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(changePublicationAvailabilityPendingAction());
      // const { data } = await api.put(`/publication/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(changePublicationAvailabilitySuccessAction(data));
      toast.success(AlertMessage.updated('disponibilidad'));
    } catch (error) {
      dispatch(changePublicationAvailabilityErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
