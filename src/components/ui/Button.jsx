import { styled, css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-brand-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-brand-500);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${props =>
    props.fullwidth &&
    props.fullwidth === 'true' &&
    css`
      width: 100%;
    `}

  ${props => sizes[props.size]}
  ${props => variations[props.variant]}
`;

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};

export default Button;
