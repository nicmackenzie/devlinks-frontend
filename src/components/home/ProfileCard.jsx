import { styled } from 'styled-components';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const StyledProfileCard = styled.div`
  background-color: var(--color-grey-0);
  width: 100%;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Img = styled.img`
  width: 4.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  align-self: center;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & h2 {
    text-align: center;
  }

  & .dev {
    text-transform: capitalize;
  }

  & .work {
    display: flex;
    justify-content: space-between;
    color: var(--color-brand-700);
    font-weight: 500;
  }
  & .links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & a {
      text-align: center;
      text-transform: capitalize;
    }
  }
`;

function ProfileCard({ user }) {
  return (
    <StyledProfileCard>
      <Img src={user.image_url} alt={user.user_name} />
      <PersonalInfo>
        <h2>{user.user_name}</h2>
        <div className="work">
          <p className="dev">{user.devtype}</p>
          <p>1-2 Years Experience</p>
        </div>
        {user.userlinks.length > 0 ? (
          <div className="links">
            {user.userlinks.map(link => (
              <Button
                key={link.id}
                as={Link}
                to={link.link_url}
                target="_blank"
              >
                {link.name}
              </Button>
            ))}
          </div>
        ) : (
          <p>No Links provided</p>
        )}
      </PersonalInfo>
    </StyledProfileCard>
  );
}

export default ProfileCard;
