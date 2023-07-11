import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

interface SearchBoxWrapperProps {
  active: boolean;
}

export const StyleIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 18px;
  padding: 5px 5px 5px 7px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    color: #808080;
    background-color: hsl(0deg 100% 98.96% / 20%);
  }
`;

export const Icon__SearchRight = styled.div`
  position: absolute;
  color: #808080;
  display: none;
`;

export const SearchInput = styled.input`
  padding: 7px 5px 5px 7px;
  border: none;
  background: transparent;
  outline: none;
  transition: width 0.3s ease;
  color: #ffffff;
  width: 100%;
  &:focus {
    color: #808080;
  }

  &::placeholder {
    color: #fff;
    font-size: 13px;
  }
  &:hover::placeholder {
    color: #808080;
  }
`;

export const SearchBoxWrapper = styled.div<SearchBoxWrapperProps>`
  z-index: 3;
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  width: ${(props) => (props.active ? "147px" : "217px")};
  height: 28px;
  background-color: hsl(0deg 100% 98.96% / 20%);
  border-radius: 4px;
  transition: width 0.3s ease;
  overflow: hidden;

  &:focus-within {
    width: 420px;
    background-color: #fff;
    color: #808080;
    .icon__search {
      color: #808080;
    }
    .icon__click-hide {
      display: none;
    }
  }
  &:focus-within ${SearchInput} {
    &::placeholder {
      color: #808080;
    }
  }

  &:focus-within ${Icon__SearchRight} {
    display: block;
    right: 0;
    font-size: 13px;

    .icon__right {
      color: #808080;
    }
  }
  &:hover {
    .icon__search {
      color: #808080;
      translate: 0.1s;
    }
  }
`;

export const IconClick = styled(FontAwesomeIcon)`
  margin-left: -5px;
  display: none;
  &:hover {
    cursor: pointer;
  }
`;

export const StyleHistory = styled.div`
  position: absolute;
  top: 45px;
  width: 420px;
`;
