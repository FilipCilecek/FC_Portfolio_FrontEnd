import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #00a2ca;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 14px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
      background-color: #313236;
`;

const Inputsubmit = () => {
  return <Input type='submit' />;
};

export default Inputsubmit;
