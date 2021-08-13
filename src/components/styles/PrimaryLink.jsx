import styled from 'styled-components';

const PrimaryLink = styled.a`
  position: relative;
  display: ${(props) => (props.block ? 'inline-block' : 'inline')};
  font-weight: bold;
  color: var(--color-white);
  padding: 0.8rem;
  margin-left: 0.8rem;
  margin-right: 1.6rem;

  & svg {
    display: inline;
    vertical-align: middle;
    margin-right: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--color-cyan);
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.3s;
  }
`;

export default PrimaryLink;
