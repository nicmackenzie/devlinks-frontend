import { useMutation } from '@tanstack/react-query';
import { updateUserDetails } from '../../api/apis';
import { toast } from 'react-hot-toast';

export function useUpdateProfile() {
  const { mutate: update, isLoading: isUpdating } = useMutation({
    mutationFn: ({ details, id }) => updateUserDetails({ details, id }),
    onSuccess: () => toast.success('User details updated successfully'),
    onError: error => toast.error(error.message),
  });

  return { update, isUpdating };
}
