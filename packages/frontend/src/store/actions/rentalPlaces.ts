import { IPagination, IPaginationParams } from '@student_life/common';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { api } from '@/services/api';
import { TRootState } from '@/store/reducers';
import {
  CLEAR_RENTAL_PLACES,
  FILTER_RENTAL_PLACE_ERROR,
  FILTER_RENTAL_PLACE_PENDING,
  FILTER_RENTAL_PLACE_SUCCESS,
  GET_ALL_RENTAL_PLACES_ERROR,
  GET_ALL_RENTAL_PLACES_PENDING,
  GET_ALL_RENTAL_PLACES_SUCCESS,
  GET_RENTAL_PLACE_ERROR,
  GET_RENTAL_PLACE_PENDING,
  GET_RENTAL_PLACE_SUCCESS,
  LIKE_RENTAL_PLACE_ERROR,
  LIKE_RENTAL_PLACE_PENDING,
  LIKE_RENTAL_PLACE_SUCCESS,
  ORDER_RENTAL_PLACE_ERROR,
  ORDER_RENTAL_PLACE_PENDING,
  ORDER_RENTAL_PLACE_SUCCESS,
  SEARCH_RENTAL_PLACE_ERROR,
  SEARCH_RENTAL_PLACE_PENDING,
  SEARCH_RENTAL_PLACE_SUCCESS,
  SET_RENTAL_PLACES,
} from '@/store/types/rentalPlaces';
import { IRentalPlace } from '@/types';

interface ISetRentalPlacesAction {
  type: typeof SET_RENTAL_PLACES;
  data: IRentalPlace[];
}

interface IClearRentalPlaces {
  type: typeof CLEAR_RENTAL_PLACES;
}

interface IGetRentalPlacePendingAction {
  type: typeof GET_RENTAL_PLACE_PENDING;
}

interface IGetRentalPlaceSuccessAction {
  type: typeof GET_RENTAL_PLACE_SUCCESS;
  data: IRentalPlace;
}

interface IGetRentalPlaceErrorAction {
  type: typeof GET_RENTAL_PLACE_ERROR;
  error: AxiosError;
}

interface ISearchRentalPlacePendingAction {
  type: typeof SEARCH_RENTAL_PLACE_PENDING;
}

interface ISearchRentalPlaceSuccessAction {
  type: typeof SEARCH_RENTAL_PLACE_SUCCESS;
  data: IRentalPlace[];
}

interface ISearchRentalPlaceErrorAction {
  type: typeof SEARCH_RENTAL_PLACE_ERROR;
  error: AxiosError;
}

interface IOrderRentalPlacePendingAction {
  type: typeof ORDER_RENTAL_PLACE_PENDING;
}

interface IOrderRentalPlaceSuccessAction {
  type: typeof ORDER_RENTAL_PLACE_SUCCESS;
  data: IRentalPlace[];
}

interface IOrderRentalPlaceErrorAction {
  type: typeof ORDER_RENTAL_PLACE_ERROR;
  error: AxiosError;
}

interface IFilterRentalPlacePendingAction {
  type: typeof FILTER_RENTAL_PLACE_PENDING;
}

interface IFilterRentalPlaceSuccessAction {
  type: typeof FILTER_RENTAL_PLACE_SUCCESS;
  data: IRentalPlace[];
}

interface IFilterRentalPlaceErrorAction {
  type: typeof FILTER_RENTAL_PLACE_ERROR;
  error: AxiosError;
}

interface ILikeRentalPlacePendingAction {
  type: typeof LIKE_RENTAL_PLACE_PENDING;
}

interface ILikeRentalPlaceSuccessAction {
  type: typeof LIKE_RENTAL_PLACE_SUCCESS;
  data: IRentalPlace;
}

interface ILikeRentalPlaceErrorAction {
  type: typeof LIKE_RENTAL_PLACE_ERROR;
  error: AxiosError;
}

interface IGetAllRentalPlacesPendingAction {
  type: typeof GET_ALL_RENTAL_PLACES_PENDING;
}

interface IGetAllRentalPlacesSuccessAction {
  type: typeof GET_ALL_RENTAL_PLACES_SUCCESS;
  data: IRentalPlace[];
}

interface IGetAllRentalPlacesErrorAction {
  type: typeof GET_ALL_RENTAL_PLACES_ERROR;
  error: AxiosError;
}

export type TRentalPlacesAction =
  | ISetRentalPlacesAction
  | IClearRentalPlaces
  | IGetRentalPlacePendingAction
  | IGetRentalPlaceSuccessAction
  | IGetRentalPlaceErrorAction
  | ISearchRentalPlacePendingAction
  | ISearchRentalPlaceSuccessAction
  | ISearchRentalPlaceErrorAction
  | IOrderRentalPlacePendingAction
  | IOrderRentalPlaceSuccessAction
  | IOrderRentalPlaceErrorAction
  | IFilterRentalPlacePendingAction
  | IFilterRentalPlaceSuccessAction
  | IFilterRentalPlaceErrorAction
  | ILikeRentalPlacePendingAction
  | ILikeRentalPlaceSuccessAction
  | ILikeRentalPlaceErrorAction
  | IGetAllRentalPlacesPendingAction
  | IGetAllRentalPlacesSuccessAction
  | IGetAllRentalPlacesErrorAction;

export const setRentalPlaces = (
  rentalPlaces: IRentalPlace[],
): ISetRentalPlacesAction => ({
  type: SET_RENTAL_PLACES,
  data: rentalPlaces,
});

export const clearRentalPlaces = (): IClearRentalPlaces => ({
  type: CLEAR_RENTAL_PLACES,
});

// =============================================================================

export const getRentalPlacePendingAction =
  (): IGetRentalPlacePendingAction => ({
    type: GET_RENTAL_PLACE_PENDING,
  });

export const getRentalPlaceSuccessAction = (
  data: IRentalPlace,
): IGetRentalPlaceSuccessAction => ({
  type: GET_RENTAL_PLACE_SUCCESS,
  data,
});

export const getRentalPlaceErrorAction = (
  error: AxiosError,
): IGetRentalPlaceErrorAction => ({
  type: GET_RENTAL_PLACE_ERROR,
  error,
});

export const getRentalPlace =
  (id: string): ThunkAction<void, TRootState, unknown, TRentalPlacesAction> =>
  async (dispatch) => {
    try {
      dispatch(getRentalPlacePendingAction());
      const { data } = await api.get<IRentalPlace>(`/rental-place/${id}`);

      dispatch(getRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(getRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const searchRentalPlacePendingAction =
  (): ISearchRentalPlacePendingAction => ({
    type: SEARCH_RENTAL_PLACE_PENDING,
  });

export const searchRentalPlaceSuccessAction = (
  data: IRentalPlace[],
): ISearchRentalPlaceSuccessAction => ({
  type: SEARCH_RENTAL_PLACE_SUCCESS,
  data,
});

export const searchRentalPlaceErrorAction = (
  error: AxiosError,
): ISearchRentalPlaceErrorAction => ({
  type: SEARCH_RENTAL_PLACE_ERROR,
  error,
});

export const searchRentalPlace =
  (text = ''): ThunkAction<void, TRootState, unknown, TRentalPlacesAction> =>
  async (dispatch) => {
    try {
      dispatch(searchRentalPlacePendingAction());
      // const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      // const { data } = await api.get(`/rental${filter}`);

      // TODO: Eliminar
      const data = [];
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(searchRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(searchRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const orderRentalPlacePendingAction =
  (): IOrderRentalPlacePendingAction => ({
    type: ORDER_RENTAL_PLACE_PENDING,
  });

export const orderRentalPlaceSuccessAction = (
  data: IRentalPlace[],
): IOrderRentalPlaceSuccessAction => ({
  type: ORDER_RENTAL_PLACE_SUCCESS,
  data,
});

export const orderRentalPlaceErrorAction = (
  error: AxiosError,
): IOrderRentalPlaceErrorAction => ({
  type: ORDER_RENTAL_PLACE_ERROR,
  error,
});

export const orderRentalPlace =
  (text = ''): ThunkAction<void, TRootState, unknown, TRentalPlacesAction> =>
  async (dispatch) => {
    try {
      dispatch(orderRentalPlacePendingAction());
      // const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      // const { data } = await api.get(`/rental${filter}`);

      // TODO: Eliminar
      const data = [];
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(orderRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(orderRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const filterRentalPlacePendingAction =
  (): IFilterRentalPlacePendingAction => ({
    type: FILTER_RENTAL_PLACE_PENDING,
  });

export const filterRentalPlaceSuccessAction = (
  data: IRentalPlace[],
): IFilterRentalPlaceSuccessAction => ({
  type: FILTER_RENTAL_PLACE_SUCCESS,
  data,
});

export const filterRentalPlaceErrorAction = (
  error: AxiosError,
): IFilterRentalPlaceErrorAction => ({
  type: FILTER_RENTAL_PLACE_ERROR,
  error,
});

export const filterRentalPlace =
  (filter = []): ThunkAction<void, TRootState, unknown, TRentalPlacesAction> =>
  async (dispatch) => {
    try {
      dispatch(filterRentalPlacePendingAction());
      // const newFilter = text
      //   ? `?filter=${encodeURI(JSON.stringify(filter))}`
      //   : '';
      // const { data } = await api.get(`/rental${newFilter}`);

      // TODO: Eliminar
      const data = [];
      // eslint-disable-next-line no-console
      console.log(filter);

      dispatch(filterRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(filterRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const likeRentalPlacePendingAction =
  (): ILikeRentalPlacePendingAction => ({
    type: LIKE_RENTAL_PLACE_PENDING,
  });

export const likeRentalPlaceSuccessAction = (
  data: IRentalPlace,
): ILikeRentalPlaceSuccessAction => ({
  type: LIKE_RENTAL_PLACE_SUCCESS,
  data,
});

export const likeRentalPlaceErrorAction = (
  error: AxiosError,
): ILikeRentalPlaceErrorAction => ({
  type: LIKE_RENTAL_PLACE_ERROR,
  error,
});

export const likeRentalPlace =
  (id: string): ThunkAction<void, TRootState, unknown, TRentalPlacesAction> =>
  async (dispatch) => {
    try {
      dispatch(likeRentalPlacePendingAction());
      // const { data } = await api.post(`/rental/${id}`);

      // TODO: Eliminar
      const data = {} as IRentalPlace;
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(likeRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(likeRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllRentalPlacesPendingAction =
  (): IGetAllRentalPlacesPendingAction => ({
    type: GET_ALL_RENTAL_PLACES_PENDING,
  });

export const getAllRentalPlacesSuccessAction = (
  data: IRentalPlace[],
): IGetAllRentalPlacesSuccessAction => ({
  type: GET_ALL_RENTAL_PLACES_SUCCESS,
  data,
});

export const getAllRentalPlacesErrorAction = (
  error: AxiosError,
): IGetAllRentalPlacesErrorAction => ({
  type: GET_ALL_RENTAL_PLACES_ERROR,
  error,
});

export const getAllRentalPlaces =
  ({ limit, from, order, sortBy }: IPaginationParams = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    TRentalPlacesAction
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllRentalPlacesPendingAction());

      const response = await api.get<IPagination<IRentalPlace>>(
        '/rental-place',
        {
          params: {
            limit: limit || null,
            from: from || null,
            order: order || null,
            sortBy: sortBy || null,
          },
        },
      );

      const {
        data: { data },
      } = response;

      dispatch(getAllRentalPlacesSuccessAction(data));
    } catch (error) {
      dispatch(getAllRentalPlacesErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
