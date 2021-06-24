// eslint-disable-next-line simple-import-sort/imports
import { Global, css } from '@emotion/react';
import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import { configServerSideCredentials } from '@/services/api';
import { fetchUserData, IUserAction } from '@/store/actions/user';
import { TRootState } from '@/store/reducers';
import { parseCookies } from '@/utils/cookie';
import withReduxStore, { Props } from '@/utils/with-redux';

function App({
  Component,
  pageProps,
  reduxStore,
}: AppProps & Props): JSX.Element {
  return (
    <>
      <Head>
        <title>Student Life</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@800&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        {/*
        <link href="public/fonts/MavenPro-ExtraBold.ttf" rel="stylesheet" />
        <link href="public/fonts/Montserrat-ExtraLight.ttf" rel="stylesheet" />
        <link href="public/fonts/Montserrat-Medium.ttf" rel="stylesheet" />
        */}
      </Head>

      <Global
        // tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />

      <Global
        styles={css`
          body::-webkit-scrollbar {
            width: 10px;
          }

          body::-webkit-scrollbar-track {
            background-color: #d9d9d9;
          }

          body::-webkit-scrollbar-thumb {
            background-color: #2a96d6;
          }
        `}
      />

      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext & { ctx: Props }) => {
  configServerSideCredentials(ctx.req);

  const cookieData = parseCookies(ctx.req);

  if (cookieData.token) {
    await (
      ctx.reduxStore.dispatch as ThunkDispatch<TRootState, unknown, IUserAction>
    )(fetchUserData(cookieData.userId));
  }

  const componentProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return {
    pageProps: {
      ...componentProps,
    },
  };
};

export default withReduxStore(App as unknown as React.ComponentClass<Props>);
