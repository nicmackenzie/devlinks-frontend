import { styled } from 'styled-components';
import FormRowVertical from '../ui/FormControlVertical';
import Input from '../ui/Input';
import Select from '../ui/Select';
import SelectMulti from 'react-select';

import { useRef, useState } from 'react';
import Button from '../ui/Button';
import { useUpdateProfile } from './useUpdateProfile';
import LoadingButtonText from '../ui/LoadingText';
import { STACKS } from '../../utils/constants';

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const devtypeOptions = [
  { value: 'full stack', label: 'Full Stack' },
  { value: 'back end', label: 'Back End' },
  { value: 'front end', label: 'Front end' },
];

const experienceOptions = [
  { value: '1', label: '1-3 Years' },
  { value: '2', label: '4-7 Years' },
  { value: '3', label: '8-15 Years' },
  { value: '4', label: 'Over 15 Years' },
];

function DetailsForm({ userDetails }) {
  const ref = useRef();
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

    // console.log(formObj);
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
            options={devtypeOptions}
            value={formFields.devtype}
            onChange={handleChange}
          />
        </FormRowVertical>
        <FormRowVertical label="Experience">
          <Select
            options={experienceOptions}
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
      <Button disabled={isUpdating}>
        {isUpdating ? <LoadingButtonText text="Updating..." /> : 'Update'}
      </Button>
    </form>
  );
}

export default DetailsForm;
