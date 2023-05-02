import { HomeContainer, HomeHeading } from "./home.styles";
import Fade from "react-reveal/Fade";

const Home = () => (
  <HomeContainer>
    <HomeHeading>
      <Fade left cascade duration={2000}>
        Welcome to Amans Henna Creations
      </Fade>
    </HomeHeading>
  </HomeContainer>
);

export default Home;
