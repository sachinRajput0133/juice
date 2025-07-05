import Head from 'next/head';
import React from 'react';

import useAppContext from '@/hook/context/useAppContext';
import '@/styles/globals.css';
import AppContext from '@/utils/appContext';

export default function App({ Component, pageProps }) {
  const value = useAppContext();

  return (
    <>
      <Head></Head>

      <AppContext.Provider value={value}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}
