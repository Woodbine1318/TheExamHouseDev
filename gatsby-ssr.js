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

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MZV6SVR');`,
      }}
    />,
  ]);
};
