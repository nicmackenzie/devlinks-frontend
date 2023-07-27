import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import FormRowVertical from '../ui/FormControlVertical';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useLogin } from '../../hooks/useLogin';
import LoadingButtonText from '../ui/LoadingText';
import { Link } from 'react-router-dom';

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
    margin-bottom: 1.5rem;
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

const StyledLink = styled(Link)`
  display: block;
  font-size: 0.875rem;
  text-align: right;
  color: var(--color-brand-800);
  margin-bottom: 1rem;
  text-decoration: underline;
`;

function LoginForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { isLogginIn, login } = useLogin();

  function onSubmit(values) {
    login(values.email, {
      onSettled: () => reset(),
    });
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login to continue</h1>
        <FormRowVertical label="Email address" error={errors?.email?.message}>
          <Input
            type="email"
            placeholder="test@test.com"
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email address entered',
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical label="Password" error={errors?.password?.message}>
          <Input
            type="password"
            placeholder="password"
            {...register('password', {
              required: 'Enter your password',
              minLength: {
                value: 6,
                message: 'Password needs to be over six characters',
              },
            })}
          />
        </FormRowVertical>
        <StyledLink to="/signup">Don&apos;t have an account?Sign up</StyledLink>
        <Button variant="primary" fullwidth="true" disabled={isLogginIn}>
          {isLogginIn ? (
            <LoadingButtonText text="Authenticating..." />
          ) : (
            'Login'
          )}
        </Button>
      </Form>
    </Main>
  );
}

export default LoginForm;
