//Library
import { CalendarViewDayOutlined } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import EmtyState from "app/components/atoms/EmtyState";
import {
  GroupIcon,
  InboxTitle,
  StyleInbox,
  TextBottom,
  TextHeader,
} from "./styled";
import { useAppSelector } from "store/configStore";
import AddTaskToday from "app/components/atoms/AddTaskToday";
import { TodayItem } from "app/modules/Today/components/TodayItem";

const ToDay: React.FC = () => {
  const [clickAddTask, setClickAddTask] = useState(false);

  // get today from store
  const todays = useAppSelector((state) => state.todayReducer.todays);

  const ClickAdd = () => {
    setClickAddTask(true);
  };

  const ClickCancel = () => {
    setClickAddTask(false);
  };

  return (
    <>
      <StyleInbox>
        <InboxTitle>
          <TextHeader>
            Today
            <span>Fri 7 Jul</span>
          </TextHeader>
          <div>
            <GroupIcon startIcon={<CalendarViewDayOutlined />}>View</GroupIcon>
          </div>
        </InboxTitle>
        {todays.map((today) => (
          <TodayItem
            title={today.title}
            key={today.id}
            id={today.id}
            description={today.description}
            status={today.status}
          />
        ))}
        <AddTaskToday
          clickAddTask={clickAddTask}
          ClickAdd={ClickAdd}
          ClickCancel={ClickCancel}
        />
        {todays.length === 0 && !clickAddTask && (
          <>
            <EmtyState
              image={
                "https://todoist.b-cdn.net/assets/images/418012032c5aaee447289642c812e569.jpg"
              }
              title={"You're all done for the week, vothanhtinh147! "}
              description={
                "By default, tasks added here will be due today. Click + to add a task"
              }
            />
            <TextBottom>
              <FontAwesomeIcon icon={faQuestion} />
              <Link to={"/"}>
                <p>How to declutter your mind with the inbox</p>
              </Link>
            </TextBottom>
          </>
        )}
      </StyleInbox>
    </>
  );
};

export default ToDay;
