import { combineReducers } from 'redux';

import adminReducer from './admin';
import rentalPlacesReducer from './rentalPlaces';
import userReducer from './user';

export const rootReducer = combineReducers({
  user: userReducer,
  rentalPlaces: rentalPlacesReducer,
  admin: adminReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
