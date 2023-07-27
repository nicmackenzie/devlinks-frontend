import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/apis';

export function useGetUsers() {
  const { isLoading, data: users } = useQuery({
    queryFn: () => getUsers,
    queryKey: ['users'],
  });

  // console.log(isLoading, users);

  return { isLoading, users };
}
