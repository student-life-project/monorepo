import { TRootState } from '../reducers';

export const userSelector = (state: TRootState) => state.user.user;
