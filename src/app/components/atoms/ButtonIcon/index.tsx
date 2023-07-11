// Libraries
import React from "react";

// Styled
import { ButtonStyle } from "./styled";

interface ButtonProp {
  iconStart: React.ElementType;
}

export const ButtonIcon: React.FC<ButtonProp> = (props) => {
  const IconStart = props.iconStart; // Capitalize the variable name

  return (
    <>
      <ButtonStyle>
        <IconStart />
      </ButtonStyle>
    </>
  );
};
