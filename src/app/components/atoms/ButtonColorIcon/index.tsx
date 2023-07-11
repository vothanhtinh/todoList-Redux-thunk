// Libraries
import React from "react";

// Styled
import { ButtonStyle } from "./styled";

interface ButtonProp {
  title: string;
  iconStart: React.ElementType;
  iconEnd: React.ElementType;
}

export const ButtonColorIcon: React.FC<ButtonProp> = (props) => {
  return (
    <>
      <ButtonStyle
        variant="outlined"
        startIcon={<props.iconStart />}
        endIcon={<props.iconEnd />}
      >
        {props.title}
      </ButtonStyle>
    </>
  );
};
