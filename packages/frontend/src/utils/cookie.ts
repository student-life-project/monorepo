import { isServer } from '@student_life/common';
import * as cookie from 'cookie';
import type { NextPageContext } from 'next';

export function parseCookies(
  req?: NextPageContext['req'],
): Record<string, string> {
  if (req) {
    return cookie.parse(req.headers.cookie || '');
  }

  if (!isServer() && typeof document !== 'undefined') {
    return cookie.parse(document.cookie);
  }

  return {};
}
