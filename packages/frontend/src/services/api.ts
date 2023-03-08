import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { NextPageContext } from 'next';
import { ThunkDispatch } from 'redux-thunk';

import { TStore } from '@/store';
import { setSessionToken } from '@/store/actions/session';
import { TRootState } from '@/store/reducers';

export const api = axios.create({
  baseURL: process.env.API_URL,
});

type TServerSideContext = NextPageContext & { reduxStore: TStore };
type TClientSideConfig = {
  token: string;
};

type TApiConfigParams = TServerSideContext | TClientSideConfig;

export const configServerSideCredentials = async (
  configParams: TApiConfigParams,
): Promise<string> => {
  let tokenSession = '';

  if ('token' in configParams) {
    tokenSession = configParams.token;
  } else {
    const { req, res, reduxStore } = configParams;

    if (req && res) {
      try {
        const { accessToken, ...restParams } = await getAccessToken(req, res); // request the token

        // eslint-disable-next-line no-console
        console.log(accessToken, restParams, 'SET_ACCESS_TOKEN');

        (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
          setSessionToken(accessToken || ''),
        );

        tokenSession = accessToken || '';
      } catch (err) {
        console.error(err);
      }
    }
  }

  api.interceptors.request.use(
    async (config) => {
      /*
      config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      */

      if (tokenSession) {
        config.headers.Authorization = `Bearer ${tokenSession}`;
      }

      config.withCredentials = true;

      return config;
    },
    (error) => Promise.reject(error),
  );

  return tokenSession;
};

/*
export const configServerSideCredentials = (req?: NextPageContext['req']) => {
  const cookieData = parseCookies(req);

  api.interceptors.request.use(
    async (config) => {
      config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      config.headers.Authorization = req
        ? `Bearer ${cookieData.token}`
        : undefined;

      config.withCredentials = true;

      return config;
    },
    (error) => Promise.reject(error),
  );
};

*/
