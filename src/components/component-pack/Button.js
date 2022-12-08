import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.disableShadow ? 'none' : '2px 2px 3px 0px rgba(0, 0, 0, 0.5)'};
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          color: #00a2ca;
          background: transparent;
          border: 1px solid #00a2ca;
          &:hover {
            background: #0087a91c;
          }
        `;
      case 'text':
        return css`
          color: #00a2ca;
          background: transparent;
          border: none;
          box-shadow: none;
          &:hover {
            background: #0087a91c;
          }
        `;
      default:
        return css`
          background: #e0e0e0;
          color: black;
          border: none;
          &:hover {
            background: #aeaeae;
          }
        `;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case 'sm':
        return css`
          padding: 6px 12px;
        `;
      case 'md':
        return css`
          padding: 8px 16px;
        `;
      case 'lg':
        return css`
          padding: 10px 20px;
        `;
      default:
        return css`
          padding: 8px 16px;
        `;
    }
  }}
`;

const Button = ({ variant, size, text, disableShadow, disabled, onClick }) => {
  return (
    <>
      <Btn
        variant={variant}
        size={size}
        disableShadow={disableShadow}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </Btn>
    </>
  );
};

export default Button;
