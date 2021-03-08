import { combineReducers } from 'redux';
import userReducer from './user';

export const rootReducer = combineReducers({ user: userReducer });

export type TRootState = ReturnType<typeof rootReducer>;
