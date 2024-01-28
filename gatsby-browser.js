import React from 'react';
import { GlobalStyles } from './src/global.styles';
import '@fontsource/rubik';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}

    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5MZV6SVR"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="gtag-no-script"
      />
    </noscript>
  </>
);
