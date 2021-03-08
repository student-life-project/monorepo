import { LOGIN, LOGOUT } from '../types/user';

interface ILoginAction {
  type: typeof LOGIN;
  data: any;
}

interface ILogoutAction {
  type: typeof LOGOUT;
}

export type IUserAction = ILoginAction | ILogoutAction;

export const loginAction = (credentials: any): ILoginAction => ({
  type: LOGIN,
  data: credentials,
});

export const logoutAction = (): ILogoutAction => ({
  type: LOGOUT,
});
