import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return (
      <LabelStyled>
        <InputStyled id={props.id} type={props.type} name={props.name}/>
        <LabelTextStyled htmlFor={props.id}>{props.label}</LabelTextStyled>
      </LabelStyled>
  );
}

const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 0px;
  outline: 0;
  margin: 5px 0 30px 0;
  padding: 15px 12px 0 12px;
  box-sizing: border-box;
  background: #3b3b3b;
  color: #fff;
  border-bottom: 2px solid transparent;
  transition: all ease-in-out .3s;
  &:focus {
    border-color: red;
  }
`;

const LabelStyled = styled.label`
  position: relative;
`;

const LabelTextStyled = styled.label`
  position: absolute;
  color: #949494;
  left: 10px;
  top: -8px;
  font-weight: 300;
  font-size: 1.2em;
  transition: all ease-in-out .3s;
  ${InputStyled}:focus ~ & {
    font-size: .7em;
    top: -12px;
    left: 12px;
  }
`;

export default Input;