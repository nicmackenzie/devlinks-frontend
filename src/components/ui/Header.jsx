import { styled } from 'styled-components';
import Container from './Container';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const StyledHeader = styled.header`
  height: 6rem;
  padding: 1rem 0;
`;

const StyledContainer = styled(Container)`
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const NavItem = styled(NavLink)`
  font-size: 1rem;
  color: var(--color-grey-500);
  font-weight: 500;
  padding: 0 0.25rem;
  transition: all 0.3s;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-800);
  }
`;

const LogoutButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.25rem 0.5rem;
  background-color: var(--color-brand-600);
  color: var(--color-grey-0);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

function Header() {
  const { isAuthenticated, logOut } = useAuth();

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <nav>
          <NavItems>
            {!isAuthenticated ? (
              <>
                <NavItem to="/login">Login</NavItem>
                <NavItem to="/sign-up">Sign Up</NavItem>
              </>
            ) : (
              <>
                <NavItem to="/profile">My Profile</NavItem>
                <LogoutButton onClick={logOut}>Logout</LogoutButton>
              </>
            )}
          </NavItems>
        </nav>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
