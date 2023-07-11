// Components
import HistorySearchItem from "../HistorySearchItem";

// Styled
import { Group, GroupHistory, StyleHistorySearch } from "./styled";

const HistorySearch = () => {
  return (
    <Group>
      <GroupHistory>
        <div className="title">Recently viewed</div>
        <div>
          <StyleHistorySearch>
            <HistorySearchItem
              title={"Inbox"}
              icon={"https://cdn-icons-png.flaticon.com/128/1161/1161728.png"}
            />
            <HistorySearchItem
              title={"Today"}
              icon={"https://cdn-icons-png.flaticon.com/128/3652/3652191.png"}
            />
            <HistorySearchItem
              title={"Today"}
              icon={"https://cdn-icons-png.flaticon.com/128/3652/3652191.png"}
            />
          </StyleHistorySearch>
        </div>
      </GroupHistory>
      <GroupHistory>
        <div className="title">AI Assist</div>
        <div>
          <StyleHistorySearch>
            <HistorySearchItem
              title={"Today"}
              icon={"https://cdn-icons-png.flaticon.com/128/3652/3652191.png"}
            />
          </StyleHistorySearch>
        </div>
      </GroupHistory>
    </Group>
  );
};
export default HistorySearch;
