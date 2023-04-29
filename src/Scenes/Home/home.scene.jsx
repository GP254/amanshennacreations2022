import { HomeContainer } from "./home.styles";
import { Carousel } from "react-bootstrap";

const Home = () => (
  <Carousel variant={"dark"} id="home">
    <Carousel.Item>
      <HomeContainer />
    </Carousel.Item>

    <Carousel.Item>
      <HomeContainer />
    </Carousel.Item>
  </Carousel>
);

export default Home;
