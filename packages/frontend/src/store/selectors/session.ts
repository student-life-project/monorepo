import type { TRootState } from '../reducers';

export const tokenSessionSelecor = (state: TRootState) => state.session.token;
