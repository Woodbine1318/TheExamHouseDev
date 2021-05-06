import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import FeatherIcon from 'feather-icons-react';
import styled from 'styled-components';

const Header = () => {
  const {
    site: {
      siteMetadata: { socialMedia },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          socialMedia {
            linkedin
          }
        }
      }
    }
  `);

  return (
    <StyledHeader>
      <nav aria-label="Primary Navigation">
        <Logo to="/" aria-label="Go to home page">
          The Exam House
        </Logo>

        <CompactNavigation>
          <Link to="/search" aria-label="Search">
            <FeatherIcon icon="search" aria-hidden />
          </Link>

          <MobileMenu>
            <summary aria-label="Same site links">
              <FeatherIcon icon="menu" className="open-btn" aria-hidden />
              <FeatherIcon icon="x" className="close-btn" aria-hidden />
            </summary>

            <nav>
              <ul>
                <li>
                  <Link to="/">
                    <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A level Exam Centre, Access
                    Arrangements & Private Candidates
                  </Link>
                </li>
              </ul>
            </nav>
          </MobileMenu>
        </CompactNavigation>

        <ExtendedNavigation>
          <li>
            <Link to="/">
              <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A level Exam Centre, Access
              Arrangements & Private Candidates
            </Link>
          </li>

          <li>
            <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <FeatherIcon icon="linkedin" aria-hidden />
            </a>
          </li>
        </ExtendedNavigation>
      </nav>
    </StyledHeader>
  );
};

export default Header;

// STYLES

const Logo = styled(Link)`
  font-size: 2.4rem;
  margin-right: 4rem;
`;

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--color-cyan);
  padding: 0.8rem 1.6rem;

  & nav {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    background-color: var(--color-background);
  }

  @media (min-width: 1400px) {
    padding-left: calc((100vw - 1400px) / 2 + 1.6rem);
    padding-right: calc((100vw - 1400px) / 2 + 1.6rem);
  }
`;

const CompactNavigation = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-top: 0.4rem;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 4.2rem;
    min-height: 3.2rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.details`
  --menu-left: -100%;

  & summary {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 4.2rem;
    min-height: 3.2rem;
    z-index: var(--z-index-menu-close);
  }

  & .close-btn {
    display: none;
  }

  &[open] {
    --menu-left: 0;

    & .close-btn {
      display: block;
    }

    & .open-btn {
      display: none;
    }
  }

  & nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: var(--menu-left);
    display: flex;
    flex-flow: column nowrap;
    padding: 12rem 1.6rem;
    width: 100%;
    background-color: var(--color-white);
    z-index: var(--z-index-menu);
    transition: all 0.3s;

    & ul {
      list-style-type: none;
      font-size: 2.4rem;
    }
  }
`;

const ExtendedNavigation = styled.ul`
  display: none;
  flex: 1 1 0;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.4rem;
  gap: 2.4rem;
  list-style-type: none;
  font-size: 1.4rem;

  & li {
    margin: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    padding-top: 0.4rem;
  }
`;
