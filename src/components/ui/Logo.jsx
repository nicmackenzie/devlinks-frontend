import { CiLink } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = styled.div`
  background-color: var(--color-brand-500);
  border-radius: var(--border-radius-md);
  color: var(--color-grey-0);
  width: 36px;
  height: 36px;
`;

const Text = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-grey-800);
`;

function Logo() {
  return (
    <StyledLogo to="/">
      <Icon>
        <CiLink size={36} />
      </Icon>
      <Text>DevLinks</Text>
    </StyledLogo>
  );
}

export default Logo;
