import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

import { Layout } from '../components/layout/Layout';
import '../lib/i18n/i18n';

import useAppContext from '@/hook/context/useAppContext';
import AppContext from '@/utils/appContext';

export default function App({ Component, pageProps }) {
  const value = useAppContext();

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head></Head>

      <AppContext.Provider value={value}>
        {getLayout(<Component {...pageProps} />)}
      </AppContext.Provider>
    </>
  );
}
