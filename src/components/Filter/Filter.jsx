import { useDispatch } from 'react-redux';

import { filterUse } from 'redux/filterSlice';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = evt => {
    dispatch(filterUse(evt.target.value));
  };
  return (
    <Label>
      Find contact by name
      <Input type="text" onChange={filterHandler} />
    </Label>
  );
};
export default Filter;
