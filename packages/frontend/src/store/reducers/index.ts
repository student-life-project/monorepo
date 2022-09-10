import { combineReducers } from 'redux';

import rentalPlacesReducer from './rentalPlacesTemp';
import userReducer from './users';

export const rootReducer = combineReducers({
  user: userReducer,
  rentalPlaces: rentalPlacesReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
