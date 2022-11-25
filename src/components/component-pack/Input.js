import React from 'react';
import styled, { css } from 'styled-components';

const Inp = styled.input`
  padding: 6px 8px;
  border-radius: 6px;
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
          &:hover,
          &:focus {
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
          &:focus {
            background: #0087a91c;
            outline: 1px solid #00a2ca;
          }
        `;
      default:
        return css`
          background: #e0e0e0;
          color: black;
          border: none;
          &:hover,
          &:focus {
            background: #aeaeae;
          }
        `;
    }
  }}
`;

const Input = ({
  placeholder,
  type,
  required,
  max,
  maxlength,
  value,
  variant,
  disabled,
  disableShadow,
}) => {
  return (
    <>
      <Inp
        placeholder={placeholder}
        type={type}
        required={required}
        max={max}
        maxLength={maxlength}
        value={value}
        variant={variant}
        disabled={disabled}
        disableShadow={disableShadow}
      />
    </>
  );
};

export default Input;
