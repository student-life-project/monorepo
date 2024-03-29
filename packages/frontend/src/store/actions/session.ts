import { CLEAR_SESSION_TOKEN, SET_SESSION_TOKEN } from '../types/session';

interface ISetSessionTokenActon {
  type: typeof SET_SESSION_TOKEN;
  data: string;
}

interface IClearSessionTokenAction {
  type: typeof CLEAR_SESSION_TOKEN;
}

export type TSessionAction = ISetSessionTokenActon | IClearSessionTokenAction;

export const setSessionToken = (token: string): ISetSessionTokenActon => ({
  type: SET_SESSION_TOKEN,
  data: token,
});

export const clearSessionToken = (): IClearSessionTokenAction => ({
  type: CLEAR_SESSION_TOKEN,
});
