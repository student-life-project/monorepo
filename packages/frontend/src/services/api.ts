import axios from 'axios';
import { NextPageContext } from 'next';

import { parseCookies } from '@/utils/cookie';

export const api = axios.create({
  baseURL: process.env.API_URL,
});

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
