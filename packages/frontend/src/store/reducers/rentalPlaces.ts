import { IRentalPlace } from '@student_life/common';
import { AxiosError } from 'axios';

import { IRentalPlacesAction } from '@/store/actions/rentalTypes';
import {
  GET_RENTAL_PLACE_ERROR,
  GET_RENTAL_PLACE_PENDING,
  GET_RENTAL_PLACE_SUCCESS,
} from '@/store/types/rentalPlace';

export interface IState {
  rentalPlaces: IRentalPlace[];
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
  payload: IRentalPlacesAction,
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
        rentalPlaces: payload.data.slice(),
        isFetching: false,
        error: null,
      };
    case GET_RENTAL_PLACE_ERROR:
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
