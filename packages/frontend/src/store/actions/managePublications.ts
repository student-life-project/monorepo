import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { api } from '@/services/api';
import { TRootState } from '@/store/reducers';
import {
  CHANGE_PUBLICATION_APPROVAL_ERROR,
  CHANGE_PUBLICATION_APPROVAL_PENDING,
  CHANGE_PUBLICATION_APPROVAL_SUCCESS,
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
} from '@/store/types/managePublications';
import {
  IPublications,
  IQueryCommonFilters,
  IRentalPlace,
  TElementId,
} from '@/types';

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

interface ISearchPublicationPendingAction {
  type: typeof SEARCH_PUBLICATION_PENDING;
}

interface ISearchPublicationSuccessAction {
  type: typeof SEARCH_PUBLICATION_SUCCESS;
  data: IPublications;
}

interface ISearchPublicationErrorAction {
  type: typeof SEARCH_PUBLICATION_ERROR;
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
  data: IPublications;
}

interface IGetAllPublicationErrorAction {
  type: typeof GET_ALL_PUBLICATIONS_ERROR;
  error: AxiosError;
}

interface IChangePublicationApprovalPendingAction {
  type: typeof CHANGE_PUBLICATION_APPROVAL_PENDING;
}

interface IChangePublicationApprovalSuccessAction {
  type: typeof CHANGE_PUBLICATION_APPROVAL_SUCCESS;
  data: IRentalPlace;
}

interface IChangePublicationApprovalErrorAction {
  type: typeof CHANGE_PUBLICATION_APPROVAL_ERROR;
  error: AxiosError;
}

export type TPublicationsAction =
  | IGetPublicationPendingAction
  | IGetPublicationSuccessAction
  | IGetPublicationErrorAction
  | IDeletePublicationPendingAction
  | IDeletePublicationSuccessAction
  | IDeletePublicationErrorAction
  | IGetAllPublicationPendingAction
  | IGetAllPublicationSuccessAction
  | IGetAllPublicationErrorAction
  | ISearchPublicationPendingAction
  | ISearchPublicationSuccessAction
  | ISearchPublicationErrorAction
  | IChangePublicationApprovalPendingAction
  | IChangePublicationApprovalSuccessAction
  | IChangePublicationApprovalErrorAction;

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
      dispatch(getPublicationPendingAction());

      const { data } = await api.get<IRentalPlace>(
        `/rental-place/${id as string}`,
      );

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

export const getAllPublicationPendingAction =
  (): IGetAllPublicationPendingAction => ({
    type: GET_ALL_PUBLICATIONS_PENDING,
  });

export const getAllPublicationSuccessAction = (
  data: IPublications,
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

export const getAllPublications =
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
      const { data } = await api.get<IPublications>(
        `/rental-place/${limitQuery}`,
      );

      dispatch(getAllPublicationSuccessAction(data));
    } catch (error) {
      dispatch(getAllPublicationErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const changePublicationApprovalPendingAction = (): any => ({
  type: CHANGE_PUBLICATION_APPROVAL_PENDING,
});

export const changePublicationApprovalSuccessAction = (data: unknown): any => ({
  type: CHANGE_PUBLICATION_APPROVAL_SUCCESS,
  data,
});

export const changePublicationApprovalErrorAction = (
  error: AxiosError,
): any => ({
  type: CHANGE_PUBLICATION_APPROVAL_ERROR,
  error,
});

export const changePublicationApproval =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(changePublicationApprovalPendingAction());
      // const { data } = await api.put(`/publication/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(changePublicationApprovalSuccessAction(data));
      toast.success(AlertMessage.updated('aprobación'));
    } catch (error) {
      dispatch(changePublicationApprovalErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
