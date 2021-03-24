import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 8rem 1.6rem;

  & h1.title {
    text-align: center;
    margin-bottom: 6rem;
  }

  & > .gatsby-image-wrapper {
    align-self: center;
    display: block;
    margin: 8rem auto;
  }

  & ul,
  & ol,
  & dl {
    margin-bottom: 1.6rem;

    & p {
      display: inline;
      margin: 0;
    }
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

  @media (min-width: 960px) {
    padding-left: calc((100vw - 960px) / 2 + 1.6rem);
    padding-right: calc((100vw - 960px) / 2 + 1.6rem);
  }
`;

export default Container;
