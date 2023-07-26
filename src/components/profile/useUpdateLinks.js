import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateUserLinks } from '../../api/apis';

export function useUpdateLinks() {
  const { isLoading: isUpdatingLinks, mutate: updateLinks } = useMutation({
    mutationFn: ({ links, id }) => updateUserLinks({ links, id }),
    onSuccess: () => toast.success('Updated successfully'),
    onError: error => toast.error(error.message),
  });

  return { isUpdatingLinks, updateLinks };
}
