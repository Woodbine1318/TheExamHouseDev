import { Link } from 'gatsby';
import styled from 'styled-components';

export const PaginationNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 8rem 0 2.4rem;
  gap: 4rem;
  text-align: left;

  & div:last-of-type {
    text-align: right;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(20rem, 32rem));
    justify-content: space-between;
    gap: 2.4rem;
  }
`;

export const PaginationLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;

  & small {
    font-size: 1.2rem;
    color: var(--color-gray);
    text-transform: uppercase;
  }

  & span {
    font-size: 2.2rem;
  }
`;
