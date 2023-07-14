// Libraries
import React from "react";

// Styled
import { CheckboxLable } from "./styled";

//Store
import { useAppDispatch } from "store/configStore";
import { changeStatusInbox } from "store/inboxSlice";
import { changeStatusToday } from "store/todaySlice";
// import { changeStatusToday } from "store/todaySlice";

interface CheckBoxProps {
  title: string;
  status: number;
  description: string;
  type: string;
  id: string;
}
export const Checkbox: React.FC<CheckBoxProps> = (props) => {
  const { id, title, status, description, type } = props;
  const todayId = id;
  const dispatch = useAppDispatch();
  const ChangeStatus = () => {
    if (type === "inbox") {
      // dispatch(changeStatusInbox({ id, title, status, description }));
    }
    if (type === "today") {
      dispatch(changeStatusToday({ todayId, title, status: 1, description }));
    }
  };

  return (
    <CheckboxLable onClick={ChangeStatus}>
      <span></span>
    </CheckboxLable>
  );
};
