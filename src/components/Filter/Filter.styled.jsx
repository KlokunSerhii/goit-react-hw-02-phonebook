import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  font-weight: 600;
`;
export const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 7px 15px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;

  &:focus {
    border: 2px solid green;
  }
`;
