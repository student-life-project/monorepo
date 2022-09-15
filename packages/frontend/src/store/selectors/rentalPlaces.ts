export const stateRentalPlacesSelector = (state: any) =>
  state.rentalPlaces.rentalPlaces;

export const rentalPlacesSelector = (state: any) =>
  state.rentalPlaces.rentalPlaces;

export const isFetchingRentalPlacesSelector = (state: any) =>
  state.rentalPlaces.isFetching;

export const errorRentalPlacesSelector = (state: any) =>
  state.rentalPlaces.error;
