// pages/_app.tsx

import 'src/styles/normalized.css';

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';
import { useMemo } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const preferDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: preferDarkTheme ? 'dark' : 'light',
      },
    });
  }, [preferDarkTheme]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        { getLayout(<Component { ...pageProps } />) }
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
