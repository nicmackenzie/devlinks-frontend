import { useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { css, styled } from 'styled-components';
import ProfileDetailsForm from './ProfileDetailsForm';
import Links from './Links';
import { useAuth } from '../../hooks/useAuth';

const StyledProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const Tabs = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  outline: none;

  ${props =>
    props.activetab === 'true' &&
    css`
      background-color: var(--color-brand-100);
      color: var(--color-brand-700);
    `}

  ${props =>
    props.activetab === 'false' &&
    css`
      background-color: transparent;
      color: var(--color-grey-700);

      &:hover {
        background-color: var(--color-brand-100);
        color: var(--color-brand-700);
      }
    `}
 
    &:focus {
    outline: none;
    border: none;
  }

  transition: all 0.3s ease-in;
`;

const Wrapper = styled.div`
  max-width: 768px;
  width: 100%;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  margin-inline: auto;
  padding: 1rem;
`;

function ProfileBox() {
  const [selectedTab, setSelectedTab] = useState('links');
  const { userDetails } = useAuth();

  return (
    <StyledProfileBox>
      <TabsContainer>
        <Tabs
          activetab={(selectedTab === 'links').toString()}
          onClick={() => setSelectedTab('links')}
        >
          <BsLink45Deg size={24} /> <span>Links</span>
        </Tabs>
        <Tabs
          activetab={(selectedTab === 'profile').toString()}
          onClick={() => setSelectedTab('profile')}
        >
          <BiUserCircle size={24} /> <span>Profile</span>
        </Tabs>
      </TabsContainer>
      <Wrapper>
        {selectedTab === 'links' ? (
          <Links userId={userDetails?.id} />
        ) : (
          <ProfileDetailsForm userDetails={userDetails} />
        )}
      </Wrapper>
    </StyledProfileBox>
  );
}

export default ProfileBox;
