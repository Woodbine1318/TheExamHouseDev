import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />

    <StyledMain>{children}</StyledMain>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const StyledMain = styled.main`
  width: min(100%, 1000px);
  padding: 8rem 1.6rem;
  margin: 0 auto;

  & h1 {
    font-size: 4rem;
  }

  & h2 {
    font-size: 3.2rem;
  }
`;
