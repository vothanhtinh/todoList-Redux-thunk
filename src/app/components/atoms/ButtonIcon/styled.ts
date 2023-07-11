// Libraries
import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 13px;
  text-transform: none;
  color: grey;
  border: none;
  padding: 4px;
  border-radius: 3px;
  background-color: #fff;
  text-align: center;
  margin-left: 5px;
  svg {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;
