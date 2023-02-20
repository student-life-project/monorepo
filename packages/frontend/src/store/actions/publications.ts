import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { api } from '@/services/api';
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
import { IQueryCommonFilters, IRentalPlace, TElementId } from '@/types';

interface IGetPublicationPendingAction {
  type: typeof GET_PUBLICATION_PENDING;
}

interface IGetPublicationSuccessAction {
  type: typeof GET_PUBLICATION_SUCCESS;
  data: IRentalPlace;
}

interface IGetPublicationErrorAction {
  type: typeof GET_PUBLICATION_ERROR;
  error: AxiosError;
}

interface ICreatePublicationPendingAction {
  type: typeof CREATE_PUBLICATION_PENDING;
}

interface ICreatePublicationSuccessAction {
  type: typeof CREATE_PUBLICATION_SUCCESS;
  data: IRentalPlace;
}

interface ICreatePublicationErrorAction {
  type: typeof CREATE_PUBLICATION_ERROR;
  error: AxiosError;
}

interface IUpdatePublicationPendingAction {
  type: typeof UPDATE_PUBLICATION_PENDING;
}

interface IUpdatePublicationSuccessAction {
  type: typeof UPDATE_PUBLICATION_SUCCESS;
  data: IRentalPlace;
}

interface IUpdatePublicationErrorAction {
  type: typeof UPDATE_PUBLICATION_ERROR;
  error: AxiosError;
}

interface IDeletePublicationPendingAction {
  type: typeof DELETE_PUBLICATION_PENDING;
}

interface IDeletePublicationSuccessAction {
  type: typeof DELETE_PUBLICATION_SUCCESS;
  data: IRentalPlace;
}

interface IDeletePublicationErrorAction {
  type: typeof DELETE_PUBLICATION_ERROR;
  error: AxiosError;
}

interface IGetAllPublicationPendingAction {
  type: typeof GET_ALL_PUBLICATIONS_PENDING;
}

interface IGetAllPublicationSuccessAction {
  type: typeof GET_ALL_PUBLICATIONS_SUCCESS;
  data: IRentalPlace[];
}

interface IGetAllPublicationErrorAction {
  type: typeof GET_ALL_PUBLICATIONS_ERROR;
  error: AxiosError;
}

interface ISearchPublicationPendingAction {
  type: typeof SEARCH_PUBLICATION_PENDING;
}

interface ISearchPublicationSuccessAction {
  type: typeof SEARCH_PUBLICATION_SUCCESS;
  data: IRentalPlace[];
}

interface ISearchPublicationErrorAction {
  type: typeof SEARCH_PUBLICATION_ERROR;
  error: AxiosError;
}

interface IChangePublicationAvailabilityPendingAction {
  type: typeof CHANGE_PUBLICATION_AVAILABILITY_PENDING;
}

interface IChangePublicationAvailabilitySuccessAction {
  type: typeof CHANGE_PUBLICATION_AVAILABILITY_SUCCESS;
  data: IRentalPlace;
}

interface IChangePublicationAvailabilityErrorAction {
  type: typeof CHANGE_PUBLICATION_AVAILABILITY_ERROR;
  error: AxiosError;
}

export type TPublicationsAction =
  | IGetPublicationPendingAction
  | IGetPublicationSuccessAction
  | IGetPublicationErrorAction
  | ICreatePublicationPendingAction
  | ICreatePublicationSuccessAction
  | ICreatePublicationErrorAction
  | IUpdatePublicationPendingAction
  | IUpdatePublicationSuccessAction
  | IUpdatePublicationErrorAction
  | IDeletePublicationPendingAction
  | IDeletePublicationSuccessAction
  | IDeletePublicationErrorAction
  | IGetAllPublicationPendingAction
  | IGetAllPublicationSuccessAction
  | IGetAllPublicationErrorAction
  | ISearchPublicationPendingAction
  | ISearchPublicationSuccessAction
  | ISearchPublicationErrorAction
  | IChangePublicationAvailabilityPendingAction
  | IChangePublicationAvailabilitySuccessAction
  | IChangePublicationAvailabilityErrorAction;

// =============================================================================

export const getPublicationPendingAction =
  (): IGetPublicationPendingAction => ({
    type: GET_PUBLICATION_PENDING,
  });

export const getPublicationSuccessAction = (
  data: IRentalPlace,
): IGetPublicationSuccessAction => ({
  type: GET_PUBLICATION_SUCCESS,
  data,
});

export const getPublicationErrorAction = (
  error: AxiosError,
): IGetPublicationErrorAction => ({
  type: GET_PUBLICATION_ERROR,
  error,
});

export const getPublication =
  (
    id: TElementId,
  ): ThunkAction<void, TRootState, unknown, TPublicationsAction> =>
  async (dispatch) => {
    try {
      const { data } = await api.get<IRentalPlace>(
        `/rental-place/${id as string}/from-user`,
      );

      dispatch(getPublicationSuccessAction(data));
    } catch (error) {
      console.error(error.message);
      dispatch(getPublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const createPublicationPendingAction =
  (): ICreatePublicationPendingAction => ({
    type: CREATE_PUBLICATION_PENDING,
  });

export const createPublicationSuccessAction = (
  data: IRentalPlace,
): ICreatePublicationSuccessAction => ({
  type: CREATE_PUBLICATION_SUCCESS,
  data,
});

export const createPublicationErrorAction = (
  error: AxiosError,
): ICreatePublicationErrorAction => ({
  type: CREATE_PUBLICATION_ERROR,
  error,
});

export const createPublication =
  (
    publication: Omit<IRentalPlace, '_id'>,
  ): ThunkAction<void, TRootState, unknown, TPublicationsAction> =>
  async (dispatch) => {
    try {
      // eslint-disable-next-line no-console
      console.log('PUBLICATION_TO_BE_CREATED', publication);
      dispatch(createPublicationPendingAction());
      const { data } = await api.post<IRentalPlace>('/rental-place', {
        publication,
      });

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

export const updatePublicationPendingAction =
  (): IUpdatePublicationPendingAction => ({
    type: UPDATE_PUBLICATION_PENDING,
  });

export const updatePublicationSuccessAction = (
  data: IRentalPlace,
): IUpdatePublicationSuccessAction => ({
  type: UPDATE_PUBLICATION_SUCCESS,
  data,
});

export const updatePublicationErrorAction = (
  error: AxiosError,
): IUpdatePublicationErrorAction => ({
  type: UPDATE_PUBLICATION_ERROR,
  error,
});

export const updatePublication =
  (
    id: TElementId,
    publication: IRentalPlace,
  ): ThunkAction<void, TRootState, unknown, TPublicationsAction> =>
  async (dispatch) => {
    try {
      dispatch(updatePublicationPendingAction());
      const { data } = await api.put<IRentalPlace>(`/publication/${id}`, {
        publication,
      });

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

export const deletePublicationPendingAction =
  (): IDeletePublicationPendingAction => ({
    type: DELETE_PUBLICATION_PENDING,
  });

export const deletePublicationSuccessAction = (
  data: IRentalPlace,
): IDeletePublicationSuccessAction => ({
  type: DELETE_PUBLICATION_SUCCESS,
  data,
});

export const deletePublicationErrorAction = (
  error: AxiosError,
): IDeletePublicationErrorAction => ({
  type: DELETE_PUBLICATION_ERROR,
  error,
});

export const deletePublication =
  (
    id: TElementId,
  ): ThunkAction<void, TRootState, unknown, TPublicationsAction> =>
  async (dispatch) => {
    try {
      dispatch(deletePublicationPendingAction());
      const { data } = await api.delete<IRentalPlace>(`/publication/${id}`);

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

export const getAllPublicationPendingAction =
  (): IGetAllPublicationPendingAction => ({
    type: GET_ALL_PUBLICATIONS_PENDING,
  });

export const getAllPublicationSuccessAction = (
  data: IRentalPlace[],
): IGetAllPublicationSuccessAction => ({
  type: GET_ALL_PUBLICATIONS_SUCCESS,
  data,
});

export const getAllPublicationErrorAction = (
  error: AxiosError,
): IGetAllPublicationErrorAction => ({
  type: GET_ALL_PUBLICATIONS_ERROR,
  error,
});

export const getAllPublication =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    TPublicationsAction
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllPublicationPendingAction());
      const limitQuery = limit ? `?limit=${limit}` : '';
      const { data } = await api.get<IRentalPlace[]>(
        `/publication${limitQuery}`,
      );

      // eslint-disable-next-line no-console
      console.log(limit);

      dispatch(getAllPublicationSuccessAction(data));
    } catch (error) {
      dispatch(getAllPublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const searchPublicationPendingAction =
  (): ISearchPublicationPendingAction => ({
    type: SEARCH_PUBLICATION_PENDING,
  });

export const searchPublicationSuccessAction = (
  data: IRentalPlace[],
): ISearchPublicationSuccessAction => ({
  type: SEARCH_PUBLICATION_SUCCESS,
  data,
});

export const searchPublicationErrorAction = (
  error: AxiosError,
): ISearchPublicationErrorAction => ({
  type: SEARCH_PUBLICATION_ERROR,
  error,
});

export const searchPublication =
  (text = ''): ThunkAction<void, TRootState, unknown, TPublicationsAction> =>
  async (dispatch) => {
    try {
      dispatch(searchPublicationPendingAction());
      const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      const { data } = await api.get<IRentalPlace[]>(`/publication${filter}`);

      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(searchPublicationSuccessAction(data));
    } catch (error) {
      dispatch(searchPublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const changePublicationAvailabilityPendingAction =
  (): IChangePublicationAvailabilityPendingAction => ({
    type: CHANGE_PUBLICATION_AVAILABILITY_PENDING,
  });

export const changePublicationAvailabilitySuccessAction = (
  data: IRentalPlace,
): IChangePublicationAvailabilitySuccessAction => ({
  type: CHANGE_PUBLICATION_AVAILABILITY_SUCCESS,
  data,
});

export const changePublicationAvailabilityErrorAction = (
  error: AxiosError,
): IChangePublicationAvailabilityErrorAction => ({
  type: CHANGE_PUBLICATION_AVAILABILITY_ERROR,
  error,
});

export const changePublicationAvailability =
  (
    id: TElementId,
  ): ThunkAction<void, TRootState, unknown, TPublicationsAction> =>
  async (dispatch) => {
    try {
      dispatch(changePublicationAvailabilityPendingAction());
      const { data } = await api.put<IRentalPlace>(`/publication/${id}`);

      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(
        changePublicationAvailabilitySuccessAction(
          data as unknown as IRentalPlace,
        ),
      );
      toast.success(AlertMessage.updated('disponibilidad'));
    } catch (error) {
      dispatch(changePublicationAvailabilityErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
