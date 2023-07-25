import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../api/apis';

export function useLogin() {
  const navigate = useNavigate();
  const { isLoading: isLogginIn, mutate: login } = useMutation({
    mutationFn: email => loginApi(email),
    onSuccess: () => {
      navigate('/');
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { isLogginIn, login };
}
