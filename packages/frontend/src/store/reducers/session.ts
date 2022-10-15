import { TSessionAction } from '../actions/session';
import { CLEAR_SESSION_TOKEN, SET_SESSION_TOKEN } from '../types/session';

export interface IState {
  token: string | null;
}

const initialState: IState = {
  token: null,
};

const reducer = (
  state: IState = initialState,
  payload: TSessionAction,
): IState => {
  switch (payload.type) {
    case SET_SESSION_TOKEN:
      return {
        token: payload.data,
      };
    case CLEAR_SESSION_TOKEN:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
