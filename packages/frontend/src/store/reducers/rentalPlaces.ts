import { AxiosError } from 'axios';

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

const reducer = (
  state: IState = initialState,
  payload: { type: any; data: any; error: any },
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
        rentalPlaces: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
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
        rentalPlaces: payload.data,
        isFetching: false,
        error: null,
      };
    case SEARCH_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
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
        rentalPlaces: payload.data,
        isFetching: false,
        error: null,
      };
    case ORDER_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
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
        rentalPlaces: payload.data,
        isFetching: false,
        error: null,
      };
    case FILTER_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
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
        rentalPlaces: payload.data,
        isFetching: false,
        error: null,
      };
    case LIKE_RENTAL_PLACE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
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
        rentalPlaces: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_ALL_RENTAL_PLACES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
