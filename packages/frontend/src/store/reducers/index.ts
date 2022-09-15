import { combineReducers } from 'redux';

import commentsReducer from './comments';
import managePublicationsReducer from './managePublications';
import manageReportsReducer from './manageReports';
import manageUsersReducer from './manageUsers';
import profileReducer from './profile';
import publicationsReducer from './publications';
import rentalPlacesReducer from './rentalPlaces';
import reportsReducer from './reports';
import userReducer from './users';

export const rootReducer = combineReducers({
  comments: commentsReducer,
  managePublications: managePublicationsReducer,
  manageReports: manageReportsReducer,
  manageUsers: manageUsersReducer,
  profile: profileReducer,
  publications: publicationsReducer,
  rentalPlaces: rentalPlacesReducer,
  reports: reportsReducer,
  user: userReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
