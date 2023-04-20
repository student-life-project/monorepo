import { TRootState } from '../reducers';

export const rentalPlacesSelector = (state: TRootState) =>
  state.rentalPlaces.rentalPlaces;

export const isFetchingRentalPlacesSelector = (state: TRootState) =>
  state.rentalPlaces.isFetching;

export const errorRentalPlacesSelector = (state: TRootState) =>
  state.rentalPlaces.error;

export const rentalPlaceDetailsSelector = (state: TRootState) =>
  state.rentalPlaces.rentalPlace;

export const likeRentalPlaceSelector = (state: TRootState) =>
  state.rentalPlaces.infoLikes;
