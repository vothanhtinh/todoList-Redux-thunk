// Styled
import { SpanStyle, StyleImage, StyleItem } from "./styled";

interface HistorySearchItemProps {
  icon: string;
  title: string;
  sub?: string;
}

const HistorySearchItem: React.FC<HistorySearchItemProps> = (props) => {
  return (
    <>
      <StyleItem>
        <StyleImage>
          <img src={props.icon} alt={props.title} />
        </StyleImage>
        <p style={{ width: "100%" }}>{props.title}</p>
        <SpanStyle>{props.sub}</SpanStyle>
      </StyleItem>
    </>
  );
};

export default HistorySearchItem;
