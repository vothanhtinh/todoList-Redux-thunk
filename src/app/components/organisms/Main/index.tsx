// Libaries
import React from "react";

// Context
import { useHeaderContext } from "context/HeaderContext";

// Styled
import { StyleMain } from "./styled";

interface MainProps {
  children?: React.ReactNode;
}

export const Main: React.FC<MainProps> = React.memo((props) => {
  const { children } = props;

  const { active } = useHeaderContext();

  return (
    <StyleMain style={{ marginLeft: active ? "390px" : "274px" }}>
      {children}
    </StyleMain>
  );
});
