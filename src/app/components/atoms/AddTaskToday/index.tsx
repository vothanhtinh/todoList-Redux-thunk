// Libraries
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Styled
import { StyleButton, StyleIcon, Text } from "./styled";

// Components
import FormAddToday from "app/modules/Today/components/FormAddToday";

interface AddTaskProps {
  isClickAddTask: boolean;
  onClickAddToday: () => void;
  onClickCancelToday: () => void;
}

const AddTaskToday: React.FC<AddTaskProps> = (props) => {
  const { isClickAddTask, onClickAddToday, onClickCancelToday } = props;
  const [task, setTask] = useState(false);

  const handleTask = () => {
    onClickAddToday();
    setTask(true);
  };

  const handleCancel = () => {
    onClickCancelToday();
    setTask(false);
  };

  return (
    <>
      {!isClickAddTask ? (
        <StyleButton onClick={handleTask}>
          <StyleIcon>
            <FontAwesomeIcon icon={faPlus} />
          </StyleIcon>
          <Text>Add task</Text>
        </StyleButton>
      ) : (
        <FormAddToday task={task} onCancel={handleCancel} />
      )}
    </>
  );
};

export default AddTaskToday;
