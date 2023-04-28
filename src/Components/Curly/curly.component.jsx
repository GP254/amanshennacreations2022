import { CurlyTextBox, TopCurl, BottomCurl } from "./curly.styles";

const CurlyText = (props) => (
  <CurlyTextBox>
    {props.curly ? <TopCurl src="curlyart1.png" alt={""} /> : null}
    {props.text}
    {props.curly ? <BottomCurl src="curlyart2.png" alt={""} /> : null}
  </CurlyTextBox>
);

export default CurlyText;
