// Libraries
import { Button } from "@mui/material";
import { styled } from "styled-components";

export const ButtonStyle = styled(Button)`
  font-size: 13px !important;
  text-transform: none !important;
  color: grey !important;
  border: 1px solid #ddd !important;
  padding: 2px 7px !important;
  margin-right: 5px !important;
  &:hover {
    background-color: #eee !important;
  }
  span.sub {
    color: #8f4700 !important;
    background-color: #faead1 !important;
    text-transform: uppercase;
    font-size: 10px;
    padding: 0px 5px;
    border-radius: 5px;
    margin-left: 2px;
    font-weight: 600;
  }
`;
