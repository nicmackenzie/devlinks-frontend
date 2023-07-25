import { css, keyframes, styled } from 'styled-components';
// import { PiSpinner } from 'react-icons/pi';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const StyledSpinner = styled.div`
  ${props =>
    props.size === 'small' &&
    css`
      & svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: currentColor;
        animation: ${rotate} 1.5s infinite linear;
      }
    `}

  ${props =>
    (!props.size || props.size === 'default') &&
    css`
      margin: 3rem auto;

      & svg {
        width: 4rem !important;
        aspect-ratio: 1;
        fill: var(--color-brand-400);
        animation: ${rotate} 1.5s infinite linear;
      }
    `}
`;

function Spinner({ size }) {
  return (
    <StyledSpinner size={size}>
      <svg>
        <use href="/icons.svg#icon-loader"></use>
      </svg>
    </StyledSpinner>
  );
}

export default Spinner;
