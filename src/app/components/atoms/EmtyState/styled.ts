// Libraries
import { styled } from "styled-components";

export const StyleEmtyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  img {
    width: 273px;
    height: 300px;
  }
`;

export const TextCenter = styled.div`
  width: 240px;
  text-align: center;
  .text__title {
    font-weight: bold;
    font-size: 16px;
  }
  .text__description {
    color: #5f6368;
    font-weight: 400;
    line-height: 1.5;
    font-size: 14px;
  }
`;
