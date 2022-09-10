//! ELIMINAR
import { IImage, IRentalPlace } from '@student_life/common';
import { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';

// import { api } from '@/services/api';
import { TRootState } from '@/store/reducers';
import {
  GET_RENTAL_PLACE_ERROR,
  GET_RENTAL_PLACE_PENDING,
  GET_RENTAL_PLACE_SUCCESS,
} from '@/store/types/rentalPlaces';
import { IQueryCommonFilters } from '@/types';

interface IGetRentalPlacesPendingAction {
  type: typeof GET_RENTAL_PLACE_PENDING;
}

interface IGetRentalPlacesSuccessgAction {
  type: typeof GET_RENTAL_PLACE_SUCCESS;
  data: IRentalPlace[];
}

interface IGetRentalPlacesErrorAction {
  type: typeof GET_RENTAL_PLACE_ERROR;
  error: AxiosError;
}

export type IRentalPlacesAction =
  | IGetRentalPlacesPendingAction
  | IGetRentalPlacesSuccessgAction
  | IGetRentalPlacesErrorAction;

export const getRentalPlacesPendingAction =
  (): IGetRentalPlacesPendingAction => ({
    type: GET_RENTAL_PLACE_PENDING,
  });

export const getRentalPlacesSuccessAction = (
  data: IRentalPlace[],
): IGetRentalPlacesSuccessgAction => ({
  type: GET_RENTAL_PLACE_SUCCESS,
  data,
});

export const getRentalPlacesErrorAction = (
  error: AxiosError,
): IGetRentalPlacesErrorAction => ({
  type: GET_RENTAL_PLACE_ERROR,
  error,
});

export const getRentalPlaces =
  ({ limit }: IQueryCommonFilters = {}): ThunkAction<
    void,
    TRootState,
    unknown,
    IRentalPlacesAction
  > =>
  async (dispatch) => {
    try {
      dispatch(getRentalPlacesPendingAction());
      /*
    const limitQuery = limit ? `?limit=${limit}` : '';
    const { data } = await api.get<IRentalPlace[]>(
      `/accommodations${limitQuery}`,
    );
    */
      const data: IRentalPlace[] = [
        {
          id: '1',
          title: 'Primera',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 1349,
          likes: 10,
        } as IRentalPlace,
        {
          id: '2',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 50.25,
        } as IRentalPlace,
        {
          id: '3',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 120.5,
          likes: 1230,
        } as IRentalPlace,
        {
          id: '4',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 1349,
          likes: 2550,
        } as IRentalPlace,
        {
          id: '5',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 50.25,
        } as IRentalPlace,
        {
          id: '6',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 120.5,
          likes: 1500,
        } as IRentalPlace,
        {
          id: '7',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 1349,
          likes: 147,
        } as IRentalPlace,
        {
          id: '8',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 50.25,
        } as IRentalPlace,
        {
          id: '9',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 120.5,
          likes: 29,
        } as IRentalPlace,
        {
          id: '10',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 1349,
          likes: 14,
        } as IRentalPlace,
        {
          id: '11',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 50.25,
        } as IRentalPlace,
        {
          id: '12',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 120.5,
          likes: 0,
        } as IRentalPlace,
        {
          id: '13',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 1349,
          likes: 20,
        } as IRentalPlace,
        {
          id: '14',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 50.25,
        } as IRentalPlace,
        {
          id: '15',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 120.5,
          likes: 0,
        } as IRentalPlace,
        {
          id: '16',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 1349,
          likes: 50,
        } as IRentalPlace,
        {
          id: '17',
          title: 'Comoda casa para descanso en Club de Golf Tequis',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 50.25,
        } as IRentalPlace,
        {
          id: '18',
          title: 'Ultima',
          images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
          price: 120.5,
          likes: 100,
        } as IRentalPlace,
      ].slice(0, limit);

      dispatch(getRentalPlacesSuccessAction(data));
    } catch (error) {
      dispatch(getRentalPlacesErrorAction(error));
    }
  };
