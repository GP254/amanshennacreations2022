import {CurlyTextBox, TopCurl, BottomCurl} from "./curly.styles";

const CurlyText = (props) => (
  <CurlyTextBox>
    <TopCurl src="curlyart1.png" alt={""}/>
    {props.text}
    <BottomCurl src="curlyart2.png" alt={""}/>
  </CurlyTextBox>
);

export default CurlyText;