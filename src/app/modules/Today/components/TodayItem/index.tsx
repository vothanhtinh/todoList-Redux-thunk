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
import FormAddToday from "../FormAddToday";

// Styled
import { BlockStyle, LeftStyle, RightStyle } from "./styled";
import { MenuShowMoreToday } from "./components/MenuShowMoreToday";

interface TaskItemProps {
  title: string;
  description: string;
  id: string;
  status: number;
}

export const TodayItem: React.FC<TaskItemProps> = (props) => {
  const [isEdit, setIsEdit] = useState(true);
  const { title, description, id, status } = props;
  const [isShowMore, setIsShowMore] = useState(false);
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
            <div className={`hide ${isHovered ? "show" : ""}`}>
              <ButtonIcon iconStart={AppsIcon} />
            </div>
            <Checkbox />
            <span>{title}</span>
          </LeftStyle>
          <RightStyle>
            {!isShowMore ? (
              <>
                <span className={`hide ${isHovered ? "show" : ""}`}>
                  <span onClick={() => ClickEdit(id)}>
                    <ButtonIcon iconStart={BorderColorIcon} />
                  </span>
                  <ButtonIcon iconStart={CalendarTodayIcon} />
                  <ButtonIcon iconStart={ChatBubbleOutlineIcon} />
                </span>
                <span onClick={ClickShowMore}>
                  <ButtonIcon iconStart={MoreHorizIcon} />
                </span>
              </>
            ) : (
              <span onClick={ClickShowMore} style={{ display: "inline" }}>
                <ButtonIcon iconStart={MoreHorizIcon} />
                {isShowMore && (
                  <MenuShowMoreToday
                    title={title}
                    description={description}
                    status={status}
                    id={id}
                  />
                )}
              </span>
            )}
          </RightStyle>
        </BlockStyle>
      ) : (
        <FormAddToday
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
