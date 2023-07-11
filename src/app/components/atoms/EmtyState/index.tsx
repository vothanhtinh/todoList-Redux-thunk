// Styled
import { StyleEmtyState, TextCenter } from "./styled";

interface InfoState {
  image: string;
  title: string;
  description: string;
}

const EmtyState: React.FC<InfoState> = (props) => {
  return (
    <StyleEmtyState>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <TextCenter>
        <div>
          <p className="text__title">{props.title}</p>
          <span className="text__description">{props.description}</span>
        </div>
      </TextCenter>
    </StyleEmtyState>
  );
};
export default EmtyState;
