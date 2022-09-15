import {
  withPageAuthRequired,
  WithPageAuthRequiredProps,
} from '@auth0/nextjs-auth0';
import { ComponentType } from 'react';

import PageLoader from '@/components/common/PageLoader';
import Error from '@/pages/_error';

const withAuth = (
  page: ComponentType<WithPageAuthRequiredProps>,
): ComponentType<WithPageAuthRequiredProps> => {
  return withPageAuthRequired(page, {
    onRedirecting: () => <PageLoader />,
    onError: ({ message }) => <Error statusCode={401} message={message} />,
  });
};

export default withAuth;
