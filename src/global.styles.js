import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray: #1d1d1d;
    --color-grey: #1d1d1d;
    --color-cyan: #08c3fd;

    --color-background: var(--color-white);
    --color-text: var(--color-gray);

    --font-times: 'Times New Roman', serif;
    --font-rubik: 'Rubik', sans-serif;
    --font-body: var(--font-rubik);
    --font-display: var(--font-rubik);

    --z-index-menu: 5;
    --z-index-menu-close: 10;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  * {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  /*
    1) Make list item markers appear inside content flow
  */
  dl,
  ol,
  ul {
    list-style-position: inside; /* [1] */
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img,
  embed,
  object,
  video {
    max-width: 100%;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
    text-size-adjust: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /*
    1) Occupy all available vertical space
    2) Fix viewport size bump on mobile safari
    3) Emphasize legibility over rendering speed and geometric precision
    4) Smooth the font on the level of the pixel
    5) Render text with grayscale antialiasing
  */
  body {
    width: 100%;
    min-height: 100vh; /* [1] */
    min-height: -webkit-fill-available; /* [2] */
    height: auto;
    font-family: var(--font-body);
    font-size: 1.8em;
    line-height: 1.6;
    color: var(--color-text);
    text-rendering: optimizeLegibility; /* [3] */
    -webkit-font-smoothing: antialiased; /* [4] */
    -moz-osx-font-smoothing: grayscale; /* [5] */
    font-smoothing: antialiased;
    background-color: var(--color-background);
    overflow: hidden;
  }

  [hidden] {
    display: none;
  }

  [disabled] {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    color: inherit;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  p {
    max-width: 65ch;
    margin-block-end: 2.4rem;
  }
`;
