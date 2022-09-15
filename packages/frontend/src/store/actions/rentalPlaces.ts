import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';

import { AlertMessage } from '@/constants/alertMessage';
import { TRootState } from '@/store/reducers';
import {
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
} from '@/store/types/rentalPlaces';
import { IQueryCommonFilters, TElementId } from '@/types';

// TODO: ELIMINAR
import { dataRentalPlaces } from '../dataFakeTemp';

// =============================================================================

export const getRentalPlacePendingAction = (): any => ({
  type: GET_RENTAL_PLACE_PENDING,
});

export const getRentalPlaceSuccessAction = (data: unknown): any => ({
  type: GET_RENTAL_PLACE_SUCCESS,
  data,
});

export const getRentalPlaceErrorAction = (error: AxiosError): any => ({
  type: GET_RENTAL_PLACE_ERROR,
  error,
});

export const getRentalPlace =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(getRentalPlacePendingAction());
      // const { data } = await api.get(`/rental/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(getRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(getRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const searchRentalPlacePendingAction = (): any => ({
  type: SEARCH_RENTAL_PLACE_PENDING,
});

export const searchRentalPlaceSuccessAction = (data: unknown): any => ({
  type: SEARCH_RENTAL_PLACE_SUCCESS,
  data,
});

export const searchRentalPlaceErrorAction = (error: AxiosError): any => ({
  type: SEARCH_RENTAL_PLACE_ERROR,
  error,
});

export const searchRentalPlace =
  (text = ''): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(searchRentalPlacePendingAction());
      // const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      // const { data } = await api.get(`/rental${filter}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(searchRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(searchRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const orderRentalPlacePendingAction = (): any => ({
  type: ORDER_RENTAL_PLACE_PENDING,
});

export const orderRentalPlaceSuccessAction = (data: unknown): any => ({
  type: ORDER_RENTAL_PLACE_SUCCESS,
  data,
});

export const orderRentalPlaceErrorAction = (error: AxiosError): any => ({
  type: ORDER_RENTAL_PLACE_ERROR,
  error,
});

export const orderRentalPlace =
  (text = ''): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(orderRentalPlacePendingAction());
      // const filter = text ? `?filter=${encodeURI(JSON.stringify(text))}` : '';
      // const { data } = await api.get(`/rental${filter}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(text);

      dispatch(orderRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(orderRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const filterRentalPlacePendingAction = (): any => ({
  type: FILTER_RENTAL_PLACE_PENDING,
});

export const filterRentalPlaceSuccessAction = (data: unknown): any => ({
  type: FILTER_RENTAL_PLACE_SUCCESS,
  data,
});

export const filterRentalPlaceErrorAction = (error: AxiosError): any => ({
  type: FILTER_RENTAL_PLACE_ERROR,
  error,
});

export const filterRentalPlace =
  (filter = []): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(filterRentalPlacePendingAction());
      // const newFilter = text
      //   ? `?filter=${encodeURI(JSON.stringify(filter))}`
      //   : '';
      // const { data } = await api.get(`/rental${newFilter}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(filter);

      dispatch(filterRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(filterRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const likeRentalPlacePendingAction = (): any => ({
  type: LIKE_RENTAL_PLACE_PENDING,
});

export const likeRentalPlaceSuccessAction = (data: unknown): any => ({
  type: LIKE_RENTAL_PLACE_SUCCESS,
  data,
});

export const likeRentalPlaceErrorAction = (error: AxiosError): any => ({
  type: LIKE_RENTAL_PLACE_ERROR,
  error,
});

export const likeRentalPlace =
  (id: TElementId): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(likeRentalPlacePendingAction());
      // const { data } = await api.post(`/rental/${id}`);

      // TODO: Eliminar
      const data = {};
      // eslint-disable-next-line no-console
      console.log(id);

      dispatch(likeRentalPlaceSuccessAction(data));
    } catch (error) {
      dispatch(likeRentalPlaceErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================

export const getAllRentalPlacesPendingAction = (): any => ({
  type: GET_ALL_RENTAL_PLACES_PENDING,
});

export const getAllRentalPlacesSuccessAction = (data: unknown): any => ({
  type: GET_ALL_RENTAL_PLACES_SUCCESS,
  data,
});

export const getAllRentalPlacesErrorAction = (error: AxiosError): any => ({
  type: GET_ALL_RENTAL_PLACES_ERROR,
  error,
});

export const getAllRentalPlaces =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    any
  > =>
  async (dispatch) => {
    try {
      dispatch(getAllRentalPlacesPendingAction());
      // const limitQuery = limit ? `?limit=${limit}` : '';
      // const { data } = await api.get(`/rental${limitQuery}`);

      // TODO: Eliminar
      const data = dataRentalPlaces(limit);
      // eslint-disable-next-line no-console
      console.log(limit);

      dispatch(getAllRentalPlacesSuccessAction(data));
    } catch (error) {
      dispatch(getAllRentalPlacesErrorAction(error));
      toast.error(AlertMessage.error);
    }
  };

// =============================================================================
