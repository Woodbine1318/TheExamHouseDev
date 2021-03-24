import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Container from './styles/Container';

const Layout = ({ children }) => (
  <>
    <Header />

    <Container as="main">{children}</Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
