// Library
import { styled } from "styled-components";

export const CheckboxLable = styled.div`
  border-radius: 50%;
  border: 1px solid #ddd;
  padding: 3px;
  width: 10px;
  height: 10px;

  &:hover {
    cursor: pointer;
    background-color: #ddd;
    &::before {
      margin-top: -5px;
      content: "✓";
      color: #808080;
      font-size: 14px;
      display: block;
      height: 100%;
      text-align: center;
      line-height: 20px;
    }
  }
`;
