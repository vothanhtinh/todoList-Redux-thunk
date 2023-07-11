// Liraries
import React from "react";

// Styled
import { ButtonStyle } from "./styled";

interface ButtonProp {
  title: string;
  icon: React.ElementType; // Update the type of the icon prop
  sub: string;
}

export const ButtonIconBorder: React.FC<ButtonProp> = (props) => {
  return (
    <>
      <ButtonStyle variant="outlined" startIcon={<props.icon />}>
        {props.title} <span className="sub">{props.sub}</span>
      </ButtonStyle>
    </>
  );
};
