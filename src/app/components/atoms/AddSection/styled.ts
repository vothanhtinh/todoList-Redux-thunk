// Libararies
import { styled } from "styled-components";

export const HoverButton = styled.button`
  padding-top: 10px;
  border: none;
  cursor: pointer;
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  color: #db4c3f;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &::after {
    content: "";
    display: block;
    height: 1px;
    flex: 1 1 auto;
    opacity: 0.5;
    background-color: #db4c3f;
  }
  &::before {
    content: "";
    display: block;
    height: 1px;
    flex: 1 1 auto;
    opacity: 0.5;
    background-color: #db4c3f;
  }
  &:hover {
    opacity: 1;
  }
`;
