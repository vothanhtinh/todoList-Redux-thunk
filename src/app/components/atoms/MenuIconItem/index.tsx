// Liraries
import React from "react";
import { ListItemIcon, ListItemText, Typography } from "@mui/material";

// Styled
import { MenuItemStyle } from "./styled";

interface MenuIconItemProps {
  icon: React.ReactElement;
  title: string;
  sub?: string;
}

export const MenuIconItem: React.FC<MenuIconItemProps> = (props) => {
  const { icon, title, sub } = props;
  return (
    <MenuItemStyle>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{title}</ListItemText>
      <Typography variant="body2" color="text.secondary">
        {sub}
      </Typography>
    </MenuItemStyle>
  );
};
