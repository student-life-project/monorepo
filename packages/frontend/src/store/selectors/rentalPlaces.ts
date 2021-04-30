import { TRootState } from '@/store/reducers';

export const rentaPlacesSelector = (state: TRootState) =>
  state.rentalPlaces.rentalPlaces;

export const isFetchingRentalPlacesSelector = (state: TRootState) =>
  state.rentalPlaces.isFetching;

export const errorRentalPlaces = (state: TRootState) =>
  state.rentalPlaces.error;
