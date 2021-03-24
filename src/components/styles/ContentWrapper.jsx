import styled from 'styled-components';

const ContentWrapper = styled.div`
  & > *:not(.gatsby-image-wrapper) {
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  & p + h2,
  & p + h3,
  & p + h4,
  & p + h5,
  & p + h6 {
    margin-top: 2em;
    margin-bottom: 0.4em;
  }

  & > .gatsby-image-wrapper {
    display: block;
    margin: 8rem auto;
  }
`;

export default ContentWrapper;
