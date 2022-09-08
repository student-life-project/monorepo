import { combineReducers } from 'redux';

import rentalPlacesReducer from './rentalPlaces';
import userReducer from './user';

export const rootReducer = combineReducers({
  user: userReducer,
  rentalPlaces: rentalPlacesReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
