// Libaries
import React from "react";
import { faBars, faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Components
import SearchBox from "./components/SearchBox";

// Constants
import { ROUTER } from "constants/routers";

// Context
import { useHeaderContext } from "context/HeaderContext";

// Styled
import { StyleHeader, StyleIcon, Wrapper } from "./styled";

export const Header: React.FC = React.memo(() => {
  const { active, setActive } = useHeaderContext();

  const handleActive = (active: boolean) => {
    setActive(!active);
  };

  return (
    <StyleHeader>
      <Wrapper>
        <StyleIcon icon={faBars} onClick={() => handleActive(active)} />
        <Link to={ROUTER.HOME.path}>
          <StyleIcon icon={faHouse} />
        </Link>
        <div className="search">
          <SearchBox />
        </div>
      </Wrapper>
      <Wrapper>
        <StyleIcon icon={faPlus} />
      </Wrapper>
    </StyleHeader>
  );
});
