import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Script to prevent flash of unstyled content when theme changes */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Check for stored theme preference
                  const storedTheme = localStorage.getItem('theme');
                  
                  if (storedTheme) {
                    // Apply stored theme
                    document.documentElement.classList.add(storedTheme);
                  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    // Apply dark theme if system prefers dark
                    document.documentElement.classList.add('dark');
                  } else {
                    // Default to light theme
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {
                  // Fallback to light theme if there's an error
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        /> */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
