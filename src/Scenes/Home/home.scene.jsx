import { HomeContainer, HomeHeading } from "./home.styles";
import Fade from "react-reveal/Fade";

const Home = () => (
  <div id="home">
    <HomeContainer>
      <HomeHeading>
        <Fade left cascade duration={2000}>
          Welcome to Amans Henna Creations
        </Fade>
      </HomeHeading>
    </HomeContainer>
  </div>
);

export default Home;
