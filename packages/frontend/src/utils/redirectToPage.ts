import { isServer } from '@student_life/common';
import { NextPageContext } from 'next';

export const redirectToPage = (
  _req: NextPageContext['req'],
  res: NextPageContext['res'],
  pageUrl: string,
): void => {
  if (!isServer()) {
    window.location.href = pageUrl;
    return;
  }

  res?.writeHead(301, {
    Location: pageUrl,
  });

  res?.end();
};
