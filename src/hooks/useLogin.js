import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../api/apis';
import { useAuth } from './useAuth';

export function useLogin() {
  const navigate = useNavigate();
  const { login: userLogin } = useAuth();

  const { isLoading: isLogginIn, mutate: login } = useMutation({
    mutationFn: email => loginApi(email),
    onSuccess: ({ data: { data: user } }) => {
      localStorage.setItem('user', JSON.stringify(user));
      userLogin(user);
      navigate('/', { replace: true });
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { isLogginIn, login };
}
