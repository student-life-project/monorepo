import { LOGIN, LOGOUT } from '../types/user';
import { IUserAction } from '../actions/user';
import { IUser } from '../../types';

export interface IState {
  user: IUser;
}

const initialState: IState = {
  user: {} as IUser,
};

const reducer = (
  state: IState = initialState,
  payload: IUserAction,
): IState => {
  switch (payload.type) {
    case LOGIN:
      return {
        ...state,
      } as IState;
    case LOGOUT:
      return {
        ...state,
      } as IState;
    default:
      return state;
  }
};

export default reducer;
