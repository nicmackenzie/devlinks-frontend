import { styled } from 'styled-components';
import FormRowVertical from '../ui/FormControlVertical';
import Input from '../ui/Input';
import Select from '../ui/Select';
import SelectMulti from 'react-select';

import { useRef, useState } from 'react';
import Button from '../ui/Button';
import { useUpdateProfile } from './useUpdateProfile';
import LoadingButtonText from '../ui/LoadingText';
import {
  DEVTYPEOPTIONS,
  EXPERIENCEOPTIONS,
  STACKS,
} from '../../utils/constants';
import { useDeleteUser } from '../../hooks/useDeleteUser';

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    align-items: center;
    justify-content: space-between;
  }
`;

function DetailsForm({ userDetails }) {
  const ref = useRef();
  const { isDeleting, deleteUser } = useDeleteUser();
  const { update, isUpdating } = useUpdateProfile();
  const [formFields, setFormFields] = useState({
    name: userDetails?.user_name,
    email: userDetails?.email,
    devtype: userDetails?.devtype,
    experience: userDetails?.experience,
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormFields(prevValues => ({ ...prevValues, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formObj = {
      ...formFields,
      stacks:
        ref.current.props.value.length > 0 &&
        ref.current.props.value.map(stack => stack.value),
    };

    update({ details: formObj, id: userDetails.id });
  }

  function handleDelete() {
    const prompt = confirm('Are you sure you want to delete your account?');
    if (prompt) {
      deleteUser(userDetails.id);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stacked>
        <FormRowVertical label="Full Name">
          <Input
            type="text"
            id="name"
            placeholder="test@test.com"
            value={formFields.name}
            onChange={handleChange}
          />
        </FormRowVertical>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            placeholder="test@test.com"
            value={formFields.email}
            onChange={handleChange}
          />
        </FormRowVertical>
      </Stacked>
      <Stacked>
        <FormRowVertical label="Stack">
          <Select
            options={DEVTYPEOPTIONS}
            value={formFields.devtype}
            onChange={handleChange}
          />
        </FormRowVertical>
        <FormRowVertical label="Experience">
          <Select
            options={EXPERIENCEOPTIONS}
            value={formFields.experience}
            onChange={handleChange}
          />
        </FormRowVertical>
      </Stacked>
      <FormRowVertical label="Experience">
        <SelectMulti
          defaultValue={[STACKS[2], STACKS[3]]}
          isMulti
          name="colors"
          options={STACKS}
          className="basic-multi-select"
          classNamePrefix="select"
          ref={ref}
        />
      </FormRowVertical>
      <Actions>
        <Button disabled={isUpdating || isDeleting}>
          {isUpdating ? <LoadingButtonText text="Updating..." /> : 'Update'}
        </Button>
        <Button
          type="button"
          disabled={isUpdating || isDeleting}
          variant="danger"
          onClick={handleDelete}
        >
          {isUpdating ? (
            <LoadingButtonText text="Updating..." />
          ) : (
            'Delete Account'
          )}
        </Button>
      </Actions>
    </form>
  );
}

export default DetailsForm;
