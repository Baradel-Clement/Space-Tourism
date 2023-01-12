import React from 'react'
import { AppProps } from 'next/app'
import { HomeContextProvider } from '../context/Home';

import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <HomeContextProvider>
      <Component {...pageProps} />
    </HomeContextProvider>
  );
}

export default MyApp
