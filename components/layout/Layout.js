import React from 'react';

import { Header } from './Header.js';
import { Footer } from './Footer.js';

export function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}
