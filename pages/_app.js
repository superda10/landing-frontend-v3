import React from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppTheme } from 'containers';
import createCache from '@emotion/cache';
import 'tailwindcss/tailwind.css';
import 'styles/App.scss';

const App = ({ Component, emotionCache = createCache({ key: 'css' }), pageProps }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Spores</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <AppTheme>
        <CssBaseline />
        <Component {...pageProps} />
      </AppTheme>
    </CacheProvider>
  );
};

export default App;
