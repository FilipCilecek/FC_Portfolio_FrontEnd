import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  //border-radius: ${(props) => (props.square ? '0%' : '50%')};
  border-radius: ${(props) => props.round};
  width: 70%;
  height: auto;
  border: 1px solid #00a2ca;
`;

const Imground = ({ cls, source, alt, round }) => {
  return <Img className={cls} src={source} alt={alt} round={round} />;
};

export default Imground;
