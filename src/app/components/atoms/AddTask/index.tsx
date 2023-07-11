// Libaries
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Components
import FormAddInbox from "../../../modules/Inbox/components/FormAddInbox";

// Styled
import { StyleButton, StyleIcon, Text } from "./styled";

interface AddTaskProps {
  clickAddTask: boolean;
  ClickAdd: () => void;
  ClickCancel: () => void;
}

const AddTask: React.FC<AddTaskProps> = (props) => {
  const { clickAddTask, ClickAdd, ClickCancel } = props;
  const [task, setTask] = useState(false);

  const handleTask = () => {
    ClickAdd();
    setTask(true);
  };

  const handleCancel = () => {
    ClickCancel();
    setTask(false);
  };

  return (
    <>
      {!clickAddTask ? (
        <StyleButton onClick={handleTask}>
          <StyleIcon>
            <FontAwesomeIcon icon={faPlus} />
          </StyleIcon>
          <Text>Add task</Text>
        </StyleButton>
      ) : (
        <FormAddInbox task={task} onCancel={handleCancel} />
      )}
    </>
  );
};

export default AddTask;
