import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & h1.title {
    text-align: center;
    margin-bottom: 6rem;
  }

  & > .gatsby-image-wrapper {
    align-self: center;
    margin: 8rem auto;
  }

  & ul {
    padding-left: 1.6rem;
    margin-bottom: 1.6rem;
  }

  & .list-bare {
    list-style-type: none;
    padding-left: 0;
  }

  & a {
    text-decoration: underline;
    text-decoration-color: var(--color-cyan);
    text-decoration-thickness: 2px;
  }
`;

export default ContentWrapper;
