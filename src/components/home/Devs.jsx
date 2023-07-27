import { styled } from 'styled-components';
import ProfileCard from './ProfileCard';
import { useGetUsers } from '../../hooks/useGetUsers';
import Spinner from '../ui/Spinner';
import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/constants';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  @media (min-width: 648px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Devs() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(function () {
    async function getUsers() {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/users`);
        const { data } = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, []);
  return (
    <StyledContainer>
      {isLoading && <Spinner />}
      {users.length &&
        users.map(user => <ProfileCard key={user.id} user={user} />)}
    </StyledContainer>
  );
}

export default Devs;
