//Libary
import React from "react";
import { Link } from "react-router-dom";

//Component
import HistorySearchItem from "../Header/components/HistorySearchItem";

// Constant
import { ROUTER } from "../../../../constants/routers";

// Context
import { useHeaderContext } from "context/HeaderContext";

// Styled
import { NavLinks, NavbarWrapper } from "./styled";

export const SideBar: React.FC = React.memo(() => {
  const { active } = useHeaderContext();

  return (
    <>
      {active && (
        <NavbarWrapper>
          <NavLinks>
            <Link to={ROUTER.INBOX.path}>
              <HistorySearchItem
                title={"Inbox"}
                icon={"https://cdn-icons-png.flaticon.com/128/1161/1161728.png"}
              />
            </Link>
            <Link to={ROUTER.TODAY.path}>
              <HistorySearchItem
                title={"Today"}
                icon={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIGszzGbT2oU25LxT3-9U-9pUd8eFAubFQQ&usqp=CAU"
                }
              />
            </Link>
          </NavLinks>
        </NavbarWrapper>
      )}
    </>
  );
});
