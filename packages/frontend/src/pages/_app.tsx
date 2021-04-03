import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import xw from 'xwind';

import { useStore } from '../store';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <title>Tailwindcss Emotion Example</title>
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

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
