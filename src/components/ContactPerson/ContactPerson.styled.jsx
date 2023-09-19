import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 7px;
  cursor: pointer;
  b &:active {
    background-color: blue;
    color: white;
  }
`;
export const Item = styled.li`
  margin-bottom: 10px;
`;
