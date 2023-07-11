// Libraries
import React from "react";

// Styled
import { CheckboxLable } from "./styled";

//Store
import { useAppDispatch } from "store/configStore";
import { changeStatusInbox } from "store/inboxSlice";
import { changeStatusToday } from "store/todaySlice";

interface CheckBoxProps {
  id: string;
  title: string;
  status: number;
  description: string;
  type: string;
}
export const Checkbox: React.FC<CheckBoxProps> = (props) => {
  const { id, title, status, description, type } = props;
  const dispatch = useAppDispatch();
  const ChangeStatus = () => {
    if (type === "inbox") {
      dispatch(changeStatusInbox({ id, title, status, description }));
    }
    if (type === "today") {
      dispatch(changeStatusToday({ id, title, status, description }));
    }
  };

  return (
    <CheckboxLable onClick={ChangeStatus}>
      <span></span>
    </CheckboxLable>
  );
};
