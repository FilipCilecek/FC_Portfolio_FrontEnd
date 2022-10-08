import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

/*
@name-color: #e4eafc;
@under-name-color: #acb4cc;
*/

const Div = styled.div`
  background: rgba(0, 135, 169, 0.11);
  position: fixed;
  bottom: 0;
  transform: skewX(130deg);
  right: -10vw;
  height: 15vw;
  width: 15vw;
  transition: all 0.2s ease 0s;
  @media only screen and (max-width: 700px) {
    right: -11vw;
    height: 18vw;
    width: 18vw;
  }
  @media only screen and (max-width: 500px) {
    right: -12vw;
    height: 20vw;
    width: 20vw;
  }
  svg {
    position: absolute;
    bottom: 2vw;
    right: 7vw;
    transform: skewX(50deg);
    font-size: clamp(20px, 2vw, 50px);
    background-color: transparent;
    transition: all 0.2s ease 0s;
    path {
      transition: all 0.2s ease 0s;
      color: #acb4cc;
    }
    @media only screen and (max-width: 700px) {
      right: 8vw;
    }
  }
  &:hover {
    background: rgba(0, 135, 169, 0.2);
    svg {
      path {
        transition: all 0.2s ease 0s;
        color: #00a2ca;
      }
    }
  }
`;

const Divnextpage = ({ text, handleChange }) => {
  return (
    <Div onChange={handleChange}>
      <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
    </Div>
  );
};

export default Divnextpage;
