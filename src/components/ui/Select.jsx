import styled from 'styled-components';

const StyledSelect = styled.select`
  /* font-size: 0.875rem; */
  font-size: 1.125rem;
  /* padding: 0.5rem 0.75rem; */
  padding: 0.375rem 0.75rem;
  border: 1px solid
    ${props =>
      props.type === 'white'
        ? 'var(--color-grey-100)'
        : 'var(--color-grey-300)'};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, onChange, type, id, onBlur }) {
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      type={type}
      id={id}
      onBlur={onBlur}
    >
      {options?.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
