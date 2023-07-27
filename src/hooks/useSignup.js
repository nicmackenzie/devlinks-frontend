import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import { signup as signupApi } from '../api/apis';

export function useSignup() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isLoading: isSigninUp, mutate: signup } = useMutation({
    mutationFn: details => signupApi(details),
    onSuccess: ({ data: { data: user } }) => {
      localStorage.setItem('user', JSON.stringify(user));
      login(user);
      navigate('/', { replace: true });
    },
    onError: error => toast.error(error.message),
  });

  return { isSigninUp, signup };
}
