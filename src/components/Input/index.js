import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  height: 38px;
  font-size: 15px;
  color: white;
  padding: 10px;
  outline: 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3.5px;
  background-color: transparent;
  margin-bottom: 25px;
`;

export default function Input({ onChange }) {
  return (
    <div>
      <InputBase onChange={onChange} />
    </div>
  )

}