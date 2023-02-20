import type { TRootState } from '../reducers';

export const tokenSessionSelector = (state: TRootState) => state.session.token;
