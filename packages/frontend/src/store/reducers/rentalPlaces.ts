import { AxiosError } from 'axios';

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

import type { TRentalPlacesAction } from '../actions/rentalPlaces';

export interface IState {
  rentalPlaces: any;
  isFetching: boolean;
  error: AxiosError | null;
}

const initialState: IState = {
  rentalPlaces: [],
  isFetching: false,
  error: null,
};

interface ITempPayload {
  type: any;
  data: any;
  error: any;
}

const reducer = (
  state: IState = initialState,
  payload: TRentalPlacesAction | ITempPayload,
): IState => {
  switch (payload.type) {
    case GET_RENTAL_PLACE_PENDING:
      return {
        ...state,
        rentalPlaces: [],
        isFetching: true,
        error: null,
      };
    case GET_RENTAL_PLACE_SUCCESS:
      return {
        ...state,
        rentalPlaces: (payload as ITempPayload).data,
        isFetching: false,
        error: null,
      };
    case GET_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: (payload as ITempPayload).error,
      };
    case SEARCH_RENTAL_PLACE_PENDING:
      return {
        ...state,
        rentalPlaces: [],
        isFetching: true,
        error: null,
      };
    case SEARCH_RENTAL_PLACE_SUCCESS:
      return {
        ...state,
        rentalPlaces: (payload as ITempPayload).data,
        isFetching: false,
        error: null,
      };
    case SEARCH_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: (payload as ITempPayload).error,
      };
    case ORDER_RENTAL_PLACE_PENDING:
      return {
        ...state,
        rentalPlaces: [],
        isFetching: true,
        error: null,
      };
    case ORDER_RENTAL_PLACE_SUCCESS:
      return {
        ...state,
        rentalPlaces: (payload as ITempPayload).data,
        isFetching: false,
        error: null,
      };
    case ORDER_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: (payload as ITempPayload).error,
      };
    case FILTER_RENTAL_PLACE_PENDING:
      return {
        ...state,
        rentalPlaces: [],
        isFetching: true,
        error: null,
      };
    case FILTER_RENTAL_PLACE_SUCCESS:
      return {
        ...state,
        rentalPlaces: (payload as ITempPayload).data,
        isFetching: false,
        error: null,
      };
    case FILTER_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: (payload as ITempPayload).error,
      };
    case LIKE_RENTAL_PLACE_PENDING:
      return {
        ...state,
        rentalPlaces: [],
        isFetching: true,
        error: null,
      };
    case LIKE_RENTAL_PLACE_SUCCESS:
      return {
        ...state,
        rentalPlaces: (payload as ITempPayload).data,
        isFetching: false,
        error: null,
      };
    case LIKE_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: (payload as ITempPayload).error,
      };
    case GET_ALL_RENTAL_PLACES_PENDING:
      return {
        ...state,
        rentalPlaces: [],
        isFetching: true,
        error: null,
      };
    case GET_ALL_RENTAL_PLACES_SUCCESS:
      return {
        ...state,
        rentalPlaces: (payload as ITempPayload).data,
        isFetching: false,
        error: null,
      };
    case GET_ALL_RENTAL_PLACES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: (payload as ITempPayload).error,
      };
    case SET_RENTAL_PLACES:
      return {
        ...state,
        rentalPlaces: (payload as any).data, // TRentalPlacesAction
        isFetching: false,
        error: null,
      };
    case CLEAR_RENTAL_PLACES:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
