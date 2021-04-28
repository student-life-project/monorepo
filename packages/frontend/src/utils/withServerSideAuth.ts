/*
import type { NextPage } from 'next';

import { configServerSideCredentials } from '@/services/api';

export const withServerSideAuth = <T extends unknown>(
  WrappedComponent: NextPage<T>,
) => {
  const Wrapper: NextPage<T> = (props) => {
    return WrappedComponent({...props});
  };

  Wrapper.getInitialProps = async (ctx) => {
    console.log('====================================');
    console.log(ctx.req?.headers?.cookie, ctx.req?.cookies?.token);
    console.log('====================================');
    configServerSideCredentials(ctx.req);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return {
      ...(componentProps || ({} as T)),
    };
  };

  return Wrapper;
};
*/
