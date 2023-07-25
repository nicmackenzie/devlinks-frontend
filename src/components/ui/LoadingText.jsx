import { styled } from 'styled-components';
import Spinner from './Spinner';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

function LoadingButtonText({ text }) {
  return (
    <StyledDiv>
      <Spinner size="small" />
      <span>{text}</span>
    </StyledDiv>
  );
}

export default LoadingButtonText;
