import styled from 'styled-components';

const ContentWrapper = styled.div`
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin-bottom: 2.4rem;
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6,
  & > p,
  & > ul,
  & > li,
  & > a,
  & > span,
  & > address,
  & > pre,
  & > blockquote,
  & > nav {
    width: min(100%, 65ch);
    margin-left: auto;
    margin-right: auto;
  }

  & > .gatsby-image-wrapper {
    display: block;
    margin: 8rem auto;
  }
`;

export default ContentWrapper;
