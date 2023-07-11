// Libraries
import React, { useRef, useState } from "react";
import {
  faCircleQuestion,
  faGripLinesVertical,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// Components
import HistorySearch from "../HistorySearch";

// Context
import { useHeaderContext } from "context/HeaderContext";

// Styled
import {
  IconClick,
  Icon__SearchRight,
  SearchBoxWrapper,
  SearchInput,
  StyleHistory,
  StyleIcon,
} from "./styled";

const SearchBox: React.FC = () => {
  const { active } = useHeaderContext();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputRef = useRef(null);

  return (
    <>
      <SearchBoxWrapper active={active}>
        <StyleIcon className="icon__search" icon={faMagnifyingGlass} />
        <SearchInput
          type="text"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />
        <IconClick className="icon__click-hide" icon={faGripLinesVertical} />
        <Icon__SearchRight>
          <StyleIcon className="icon__right " icon={faCircleQuestion} />
          <StyleIcon className="icon__right" icon={faXmark} />
        </Icon__SearchRight>
      </SearchBoxWrapper>
      {isFocused && (
        <StyleHistory>
          <HistorySearch />
        </StyleHistory>
      )}
    </>
  );
};

export default SearchBox;
