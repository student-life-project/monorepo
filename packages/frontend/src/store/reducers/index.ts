import { combineReducers } from 'redux';

import commentsReducer from './comments';
import managePublicationsReducer from './managePublications';
import manageReportsReducer from './manageReports';
import manageUsersReducer from './manageUsers';
import publicationsReducer from './publications';
import rentalPlacesReducer from './rentalPlaces';
import reportsReducer from './reports';
import sessionReducer from './session';
import userReducer from './users';

export const rootReducer = combineReducers({
  comments: commentsReducer,
  managePublications: managePublicationsReducer,
  manageReports: manageReportsReducer,
  manageUsers: manageUsersReducer,
  publications: publicationsReducer,
  rentalPlaces: rentalPlacesReducer,
  reports: reportsReducer,
  user: userReducer,
  session: sessionReducer,
});

export type TRootState = ReturnType<typeof rootReducer> & any;
