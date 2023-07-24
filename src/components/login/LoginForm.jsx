import { styled } from 'styled-components';
import FormRowVertical from '../ui/FormControlVertical';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Main = styled.main`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  background-color: var(--color-grey-0);
  max-width: 36rem;
  width: 90%;
  box-shadow: var(--shadow-sm);
  margin-inline: 1rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);

  & h1 {
    color: var(--color-brand-800);
    font-size: 1.5rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    max-width: 36rem;
    width: 100%;
    margin-inline: 0;

    & h1 {
      font-size: 2rem;
    }
  }
`;

function LoginForm() {
  return (
    <Main>
      <Form>
        <h1>Login to continue</h1>
        <FormRowVertical label="Email address">
          <Input type="email" placeholder="test@test.com" />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input type="password" placeholder="password" />
        </FormRowVertical>
        <Button variant="primary" fullwidth="true">
          Login
        </Button>
      </Form>
    </Main>
  );
}

export default LoginForm;
