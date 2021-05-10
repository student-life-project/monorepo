import { isServer } from '@student_life/common';
import { NextPageContext } from 'next';

import { parseCookies } from './cookie';

export const redirectLoggedToHome = (
  req: NextPageContext['req'],
  res: NextPageContext['res'],
): boolean => {
  const cookieData = parseCookies(req);

  if (cookieData.token) {
    if (!isServer()) {
      window.location.href = '/';
      return true;
    }

    res?.writeHead(301, {
      Location: '/',
    });

    res?.end();

    return true;
  }

  return false;
};
