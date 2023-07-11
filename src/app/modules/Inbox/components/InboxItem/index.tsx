// Libraries
import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Components
import { ButtonIcon } from "app/components/atoms/ButtonIcon";
import { Checkbox } from "app/components/atoms/CheckBox";
import FormAddInbox from "../FormAddInbox";

// Styled
import { BlockStyle, LeftStyle, RightStyle } from "./styled";
import { MenuShowMoreInbox } from "./components/MenuShowMoreInbox/index";

interface TaskItemProps {
  title: string;
  description: string;
  id: string;
  status: number;
}

export const InboxItem: React.FC<TaskItemProps> = (props) => {
  const [isEdit, setIsEdit] = useState(true);
  const [isShowMore, setIsShowMore] = useState(false);
  const { title, description, id, status } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ClickEdit = (id: string) => {
    setIsEdit(false);
  };

  const onCancel = () => {
    setIsEdit(true);
  };

  const ClickShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div>
      {isEdit ? (
        <BlockStyle
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <LeftStyle>
            {!isShowMore && (
              <div className={`hide ${isHovered ? "show" : ""}`}>
                <ButtonIcon iconStart={AppsIcon} />
              </div>
            )}
            <Checkbox />
            <span>{title}</span>
          </LeftStyle>
          <RightStyle>
            {isShowMore ? (
              <span onClick={ClickShowMore} style={{ display: "inline" }}>
                <ButtonIcon iconStart={MoreHorizIcon} />
                {isShowMore && (
                  <MenuShowMoreInbox
                    id={id}
                    status={status}
                    title={title}
                    description={description}
                  />
                )}
              </span>
            ) : (
              <>
                <div className={`hide ${isHovered ? "show" : ""}`}>
                  <span onClick={() => ClickEdit(id)}>
                    <ButtonIcon iconStart={BorderColorIcon} />
                  </span>
                  <ButtonIcon iconStart={CalendarTodayIcon} />
                  <ButtonIcon iconStart={ChatBubbleOutlineIcon} />
                </div>
                <span onClick={ClickShowMore}>
                  <ButtonIcon iconStart={MoreHorizIcon} />
                </span>
              </>
            )}
          </RightStyle>
        </BlockStyle>
      ) : (
        <FormAddInbox
          onCancel={onCancel}
          initialTask={{
            id,
            description,
            title,
            status,
          }}
        />
      )}
    </div>
  );
};
