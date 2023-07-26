import { styled } from 'styled-components';
import { GrFormAdd } from 'react-icons/gr';
import Button from '../ui/Button';
import { useState } from 'react';
import Link from './Link';
import { PLATFORMS } from '../../utils/constants';
import { toast } from 'react-hot-toast';
import { useUpdateLinks } from './useUpdateLinks';
import LoadingButtonText from '../ui/LoadingText';

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CustomButton = styled(Button)`
  align-self: flex-end;
`;

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

function validString(str) {
  return !!str.toString().trim().length;
}

function Links({ userId }) {
  const [links, setLinks] = useState([]);
  const { isUpdatingLinks, updateLinks } = useUpdateLinks();

  function handleClick() {
    if (links.length === PLATFORMS.length - 1) {
      toast.error(`You can only enter ${PLATFORMS.length - 1} links`);
      return;
    }

    const id = new Date().getTime();

    setLinks(prevLinks => [...prevLinks, { id, link: '', platform: '' }]);
  }

  function handleSubmit() {
    let invalidLink = 0;
    let empty = 0;

    links.forEach(link => {
      if (!validString(link.link) || !validString(link.platform)) empty++;
      if (!validURL(link.link)) invalidLink++;
    });

    if (empty > 0) {
      toast.error('Fill all required fields for your links');
      return;
    }

    if (invalidLink > 0) {
      toast.error(`${invalidLink} of the entered link(s) aren't valid`);
      return;
    }

    updateLinks({ links, id: userId });
  }

  return (
    <StyledLinks>
      <Button variant="secondary" onClick={handleClick}>
        <GrFormAdd />
        <span>Add Link</span>
      </Button>
      {links?.map((link, index) => (
        <Link key={link.id} index={index} {...link} onLinkChange={setLinks} />
      ))}
      {links.length > 0 && (
        <CustomButton onClick={handleSubmit} disabled={isUpdatingLinks}>
          {isUpdatingLinks ? <LoadingButtonText text="Updating..." /> : 'Save'}
        </CustomButton>
      )}
    </StyledLinks>
  );
}

export default Links;
