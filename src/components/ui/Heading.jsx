import { css, styled } from 'styled-components';

const Heading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 1.5rem;
      color: var(--color-brand-500);
    `}
  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 1.125rem;
    `}
  line-height: 1.4;
`;
export default Heading;
