import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Btn = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #00a2ca;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #313236;
  }
  svg {
    background: transparent;
    padding-right: 5px;
    path {
      background: transparent;
      &:hover {
        background-color: #313236;
      }
    }
  }
`;
/*
<div className='functional-buttons'>
        <button onClick={() => setProject(null)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          ZpátkyXD
        </button>
      </div>
*/
const Btnback = ({ setProject }) => {
  return (
    <Btn onClick={setProject}>
      <FontAwesomeIcon icon={faArrowLeft} />
      Zpátky
    </Btn>
  );
};

export default Btnback;
