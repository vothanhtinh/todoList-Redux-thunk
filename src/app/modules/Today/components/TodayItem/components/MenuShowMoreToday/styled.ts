// Libraries
import { MenuItem, Paper } from "@mui/material";
import { styled } from "styled-components";

export const MenuDeleteStyle = styled(MenuItem)`
  &:hover {
    svg {
      color: red !important;
    }
    color: red !important;
  }
`;

export const PaperStyle = styled(Paper)`
  width: 220px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: -75px;
  font-size: 13px !important;
  z-index: 1;
`;
