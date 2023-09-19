import React from 'react';
import { InputStyle, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <InputStyle type="text" value={value} onChange={onChange} />
  </Label>
);

export default Filter;
