// Libraries
import { Button } from "@mui/material";
import { styled } from "styled-components";

interface StyleInboxProps {}

export const StyleInbox = styled.div<StyleInboxProps>`
  padding: 40px 40px 0 0px;
`;

export const InboxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const GroupIcon = styled(Button)`
  text-transform: none !important;
  background: #fff !important;
  color: #202020 !important;
  padding: 2px 5px !important;
  font-size: 12px !important;

  &:hover {
    background-color: #eee !important;
  }
`;

export const TextHeader = styled.p`
  font-weight: 700;
  color: #000;
  font-size: 20px;
  margin: 0;
`;

export const TextBottom = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #db4c3f;
  margin-top: 20px;
  font-size: 14px;
  svg {
    margin-top: 2px;
    border: 1px solid #db4c3f;
    border-radius: 50%;
    padding: 0px 2px;
  }
  a {
    color: #db4c3f;
  }
  p {
    margin: 0;
    font-weight: 400;
    padding-left: 5px;
  }
`;
