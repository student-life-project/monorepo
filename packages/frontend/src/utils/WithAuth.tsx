import {
  withPageAuthRequired,
  WithPageAuthRequiredProps,
} from '@auth0/nextjs-auth0';
import { ComponentType } from 'react';

import Spinner from '@/components/common/Spinner';
import Error from '@/pages/_error';

const withAuth = (
  page: ComponentType<WithPageAuthRequiredProps>,
): ComponentType<WithPageAuthRequiredProps> => {
  return withPageAuthRequired(page, {
    onRedirecting: () => <Spinner />,
    onError: ({ message }) => <Error statusCode={401} message={message} />,
  });
};

export default withAuth;
