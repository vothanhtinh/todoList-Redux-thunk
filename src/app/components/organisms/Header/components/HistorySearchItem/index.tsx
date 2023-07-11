// Styled
import { StyleImage, StyleItem } from "./styled";

interface HistorySearchItemProps {
  icon: string;
  title: string;
}

const HistorySearchItem: React.FC<HistorySearchItemProps> = (props) => {
  return (
    <>
      <StyleItem>
        <StyleImage>
          <img src={props.icon} alt={props.title} />
        </StyleImage>
        <p style={{ width: "100%" }}>{props.title}</p>
      </StyleItem>
    </>
  );
};

export default HistorySearchItem;
