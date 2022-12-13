import PageHeader from "../../Components/pageheader.component";
import { AboutContainer } from "./about.styles";

const About = () => (
  <div id="about">
    <PageHeader text={"About the Artist"} />
    <AboutContainer>
      <img src="about.png" alt={""} />
    </AboutContainer>
  </div>
);

export default About;
