import React from 'react';
import { GlobalStyles } from './src/global.styles';
import '@fontsource/rubik';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);
