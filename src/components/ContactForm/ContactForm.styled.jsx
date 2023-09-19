import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  width: 100px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 7px;
  cursor: pointer;
  &:active {
    background-color: blue;
    color: white;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 200px;
  padding: 10px 90px 10px 15px;
  border: 1px solid gray;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
