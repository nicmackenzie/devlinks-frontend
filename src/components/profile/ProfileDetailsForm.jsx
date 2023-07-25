import { styled } from 'styled-components';
import DetailsForm from './DetailsForm';

const StyledProfileDetailsForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H2 = styled.h2`
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const P = styled.p`
  color: var(--color-grey-500);
  font-size: 0.75rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

function ProfileDetailsForm({ userDetails }) {
  return (
    <StyledProfileDetailsForm>
      <Header>
        <div>
          <H2>Profile Details</H2>
          <P>Add your details to create a personal touch to your profile</P>
        </div>
        <Img
          src={userDetails && userDetails.image_url}
          alt={userDetails && userDetails.user_name}
        />
      </Header>
      <DetailsForm userDetails={userDetails ? userDetails : {}} />
    </StyledProfileDetailsForm>
  );
}

export default ProfileDetailsForm;
