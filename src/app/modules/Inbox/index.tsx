// Libraries
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  CalendarViewDayOutlined,
  ChatBubbleOutline,
  MoreHoriz,
} from "@mui/icons-material";

// Components
import AddTask from "app/components/atoms/AddTask";
import AddSection from "app/components/atoms/AddSection";
import EmtyState from "app/components/atoms/EmtyState";
import {
  GroupIcon,
  InboxTitle,
  StyleInbox,
  TextBottom,
  TextHeader,
} from "./styled";

// Store
import { useAppSelector } from "store/configStore";

// Components
import { InboxItem } from "app/modules/Inbox/components/InboxItem";

const Inbox: React.FC = React.memo(() => {
  const [clickAddTask, setClickAddTask] = useState(false);

  // get inbox from store
  const inboxs = useAppSelector((state) => state.inboxReducer.inboxs);

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
          <TextHeader>Inbox</TextHeader>
          <div>
            <GroupIcon startIcon={<CalendarViewDayOutlined />}>View</GroupIcon>
            <GroupIcon startIcon={<ChatBubbleOutline />}>Comment</GroupIcon>
            <GroupIcon startIcon={<MoreHoriz />}></GroupIcon>
          </div>
        </InboxTitle>
        {inboxs.map((inbox) => (
          <InboxItem
            key={inbox.id}
            title={inbox.title}
            description={inbox.description}
            status={inbox.status}
            id={inbox.id}
          />
        ))}
        <AddTask
          clickAddTask={clickAddTask}
          ClickAdd={ClickAdd}
          ClickCancel={ClickCancel}
        />
        <AddSection />
        {inboxs.length === 0 && !clickAddTask && (
          <>
            <EmtyState
              image={
                "https://todoist.b-cdn.net/assets/images/c85c3d1811442a987adb401a5bd11814.jpg"
              }
              title={"Your peace of mind is priceless"}
              description={
                "Well done, vothanhtinh147! All your team's tasks are organized in the right place."
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
});

export default Inbox;
