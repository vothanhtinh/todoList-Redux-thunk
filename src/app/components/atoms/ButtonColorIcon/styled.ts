// Libraries
import { Button } from "@mui/material";
import { styled } from "styled-components";

export const ButtonStyle = styled(Button)`
  text-transform: none !important;
  color: grey !important;
  border: 1px solid #ddd !important;
  padding: 2px 7px !important;
  margin-right: 5px !important;

  &:hover {
    background-color: #eee !important;
  }
`;
