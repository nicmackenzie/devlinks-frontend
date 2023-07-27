import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import { deleteUser as deleteUserApi } from '../api/apis';

export function useDeleteUser() {
  const { logOut } = useAuth();
  const { isLoading: isDeleting, mutate: deleteUser } = useMutation({
    mutationFn: details => deleteUserApi(details),
    onSuccess: () => {
      logOut();
    },
    onError: error => toast.error(error.message),
  });

  return { isDeleting, deleteUser };
}
