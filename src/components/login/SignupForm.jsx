import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import FormRowVertical from '../ui/FormControlVertical';
import Input from '../ui/Input';
import Button from '../ui/Button';
import LoadingButtonText from '../ui/LoadingText';
import { Link } from 'react-router-dom';
import Select from '../ui/Select';
import { DEVTYPEOPTIONS, EXPERIENCEOPTIONS } from '../../utils/constants';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

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

const initialState = {
  devtype: { value: '', errors: null },
  experience: { value: '', errors: null },
};

function SignupForm() {
  const [selectFields, setSelectFields] = useState(initialState);
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const { isSigninUp, signup } = useSignup();

  function onSubmit(values) {
    const formObj = {
      ...values,
      devtype: selectFields.devtype.value,
      experience: selectFields.experience.value,
    };

    signup(formObj, {
      onSettled: () => {
        setSelectFields(initialState);
      },
    });
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setSelectFields(prevFields => ({
      ...prevFields,
      [id]: { value: value, errors: null },
    }));
  }

  function handleBlur(e) {
    const { id, value } = e.target;
    if (e.target.value === '') {
      setSelectFields(prevFields => ({
        ...prevFields,
        [id]: { value: value, errors: 'Fields is required' },
      }));
    }
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register with us</h1>
        <FormRowVertical label="Full Name" error={errors?.fullName?.message}>
          <Input
            type="text"
            placeholder="Jane Doe"
            {...register('fullName', {
              required: 'Name is required',
            })}
          />
        </FormRowVertical>
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
        <FormRowVertical
          label="Confirm Password"
          error={errors?.confirmPassword?.message}
        >
          <Input
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword', {
              required: 'Confirm your password',
              minLength: {
                value: 6,
                message: 'Password needs to be over six characters',
              },
              validate: value =>
                getValues().password === value || 'Passwords need to match',
            })}
          />
        </FormRowVertical>
        <FormRowVertical label="Stack" error={selectFields.devtype.errors}>
          <Select
            options={DEVTYPEOPTIONS}
            id="devtype"
            value={selectFields.devtype.value}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Your Experience"
          error={selectFields.experience.errors}
        >
          <Select
            options={EXPERIENCEOPTIONS}
            id="experience"
            value={selectFields.experience.value}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormRowVertical>

        <StyledLink to="/login">Already have an account? Log In</StyledLink>
        <Button variant="primary" fullwidth="true" disabled={isSigninUp}>
          {isSigninUp ? (
            <LoadingButtonText text="Registering..." />
          ) : (
            'Register'
          )}
        </Button>
      </Form>
    </Main>
  );
}

export default SignupForm;
