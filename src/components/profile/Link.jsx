import { styled } from 'styled-components';
import FormRowVertical from '../ui/FormControlVertical';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { PLATFORMS } from '../../utils/constants';
import { useState } from 'react';

const StyledLink = styled.div`
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-500);

  & p {
    font-size: 0.875rem;
    font-weight: 600;
  }

  & button {
    background-color: transparent;
    font-weight: 500;
    border: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-brand-600);
    }

    &:focus {
      outline: none;
    }
  }
`;

function Link({ index, id, onLinkChange }) {
  const [platForm, setPlatForm] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  function handleInputChange(e) {
    setLinkUrl(String(e.target.value).trim());
  }

  function handleInputBlur(e) {
    if (!e.target.value || !String(e.target.value).trim().length) return;

    onLinkChange(prevLinks => {
      const cloned = [...prevLinks];
      const index = cloned.findIndex(link => link.id === id);
      cloned[index].link = e.target.value;
      return cloned;
    });
  }

  function handleSelectChange(e) {
    setPlatForm(String(e.target.value).trim());
    if (!e.target.value || !String(e.target.value).trim().length) return;
    onLinkChange(prevLinks => {
      const cloned = [...prevLinks];
      const index = cloned.findIndex(link => link.id === id);
      cloned[index].platform = e.target.value;
      return cloned;
    });
  }

  function handleRemove() {
    onLinkChange(prevLinks => prevLinks.filter(link => link.id !== id));
  }

  return (
    <StyledLink>
      <Header>
        <p>Link # {index + 1}</p>
        <button onClick={handleRemove}>Remove</button>
      </Header>
      <FormRowVertical label="Platform">
        <Select
          options={PLATFORMS}
          value={platForm}
          onChange={handleSelectChange}
        />
      </FormRowVertical>
      <FormRowVertical label="Link Url">
        <Input
          type="url"
          name="linkUrl"
          value={linkUrl}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </FormRowVertical>
    </StyledLink>
  );
}

export default Link;
