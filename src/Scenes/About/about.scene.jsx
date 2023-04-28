import PageHeader from "../../Components/pageheader.component";
import { AboutContainer, AboutImg } from "./about.styles";
import CurlyText from "../../Components/Curly/curly.component";

const About = () => (
  <div id="about">
    <PageHeader text={"About the Artist"} />
    <AboutContainer>
      <AboutImg src="about.png" alt={""} />
      <CurlyText
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid et, fugit illum ipsam praesentium. Accusantium amet eaque explicabo iusto nulla numquam odio ratione repudiandae, sapiente sit ut, vitae!"
        }
        curly={true}
      />
    </AboutContainer>
  </div>
);

export default About;
