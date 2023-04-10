// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { UserProvider } from '@auth0/nextjs-auth0';
import { css, Global } from '@emotion/react';
import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import PageLoader from '@/components/common/PageLoader';
import { configServerSideCredentials } from '@/services/api';
import withReduxStore, { Props } from '@/utils/with-redux';

function App({
  Component,
  pageProps,
  reduxStore,
  token,
}: AppProps & Props & { token: string }): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (token) {
        await configServerSideCredentials({ token });
      }
    })();
  }, [token]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);

    return () => {
      setLoading(false);
    };
  }, [router.route]);

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
        <UserProvider>
          {loading ? <PageLoader large /> : <Component {...pageProps} />}
        </UserProvider>
      </Provider>
    </>
  );
}

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext & { ctx: Props }) => {
  const token = await configServerSideCredentials(ctx);

  const componentProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return {
    token,
    pageProps: {
      ...componentProps,
    },
  };
};

export default withReduxStore(App as unknown as React.ComponentClass<Props>);
