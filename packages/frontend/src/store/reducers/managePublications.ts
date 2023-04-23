import { AxiosError } from 'axios';

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
import { IPublications, IRentalPlace } from '@/types';

import { TPublicationsAction } from '../actions/managePublications';

export interface IState {
  publications: IPublications;
  publication: IRentalPlace | null;
  isFetching: boolean;
  error: AxiosError | null;
}

const initialState: IState = {
  publications: {
    count: 0,
    current: 0,
    data: [],
    next: 0,
    prev: 0,
  },
  publication: null,
  isFetching: false,
  error: null,
};

const reducer = (
  state: IState = initialState,
  payload: TPublicationsAction,
): IState => {
  switch (payload.type) {
    case GET_PUBLICATION_PENDING:
      return {
        ...state,
        publication: null,
        isFetching: true,
        error: null,
      };
    case GET_PUBLICATION_SUCCESS:
      return {
        ...state,
        publication: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_PUBLICATION_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case SEARCH_PUBLICATION_PENDING:
      return {
        ...state,
        publications: initialState.publications,
        isFetching: true,
        error: null,
      };
    case SEARCH_PUBLICATION_SUCCESS:
      return {
        ...state,
        publications: payload.data,
        isFetching: false,
        error: null,
      };
    case SEARCH_PUBLICATION_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case DELETE_PUBLICATION_PENDING:
      return {
        ...state,
        publication: null,
        isFetching: true,
        error: null,
      };
    case DELETE_PUBLICATION_SUCCESS:
      return {
        ...state,
        publication: payload.data,
        isFetching: false,
        error: null,
      };
    case DELETE_PUBLICATION_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case GET_ALL_PUBLICATIONS_PENDING:
      return {
        ...state,
        publications: initialState.publications,
        isFetching: true,
        error: null,
      };
    case GET_ALL_PUBLICATIONS_SUCCESS:
      return {
        ...state,
        publications: payload.data,
        isFetching: false,
        error: null,
      };
    case GET_ALL_PUBLICATIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case CHANGE_PUBLICATION_APPROVAL_PENDING:
      return {
        ...state,
        publication: null,
        isFetching: true,
        error: null,
      };
    case CHANGE_PUBLICATION_APPROVAL_SUCCESS:
      return {
        ...state,
        publication: payload.data,
        isFetching: false,
        error: null,
      };
    case CHANGE_PUBLICATION_APPROVAL_ERROR:
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
