import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #0088a9;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
`;

const Inputnumber = ({ placeholder, handleChange }) => {
  return (
    <Input type='number' placeholder={placeholder} onChange={handleChange} />
  );
};

export default Inputnumber;
