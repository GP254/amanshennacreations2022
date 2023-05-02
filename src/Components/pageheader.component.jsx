import { StyledHeaderBox } from "./pageheader.styles";
import Fade from "react-reveal/Fade";

const PageHeader = (props) => (
  <StyledHeaderBox>
    <Fade left cascade duration={2000}>
      {props.text}
    </Fade>
  </StyledHeaderBox>
);

export default PageHeader;
