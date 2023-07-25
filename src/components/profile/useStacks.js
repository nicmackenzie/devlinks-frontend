import { useQuery } from '@tanstack/react-query';
import { getStacks } from '../../api/apis';

export function useStacks() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['stacks'],
    queryFn: getStacks,
  });

  return { isLoading, data, error };
}
