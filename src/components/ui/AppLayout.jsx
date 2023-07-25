import { styled } from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Container from './Container';

const Main = styled.main`
  background-color: var(--color-grey-50);
  /* padding: 1.5rem 1.5rem 3rem; */
  height: calc(100dvh - 8rem);
  overflow: scroll;
`;

const StyledContainer = styled(Container)`
  height: 100%;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </Main>
    </>
  );
}

export default AppLayout;
