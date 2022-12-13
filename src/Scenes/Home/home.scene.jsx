import {
  HomeImageSmall,
  HomeImageLarge,
  HomeHeading,
  HomeContainer,
  BookNowButton,
} from "./home.styles";
import { Carousel } from "react-bootstrap";

const Home = () => (
  <Carousel variant={"dark"} id="home">
    <Carousel.Item>
      <HomeContainer>
        <HomeImageLarge src={"front.png"} alt={"front"} />
        <HomeHeading>Welcome To Amans Henna Creations</HomeHeading>
      </HomeContainer>
    </Carousel.Item>
    <Carousel.Item>
      <HomeContainer>
        <HomeImageSmall src={"home1.png"} />
        <div>
          <HomeHeading>
            We Provide a variety of henna services fit for your occasion. If you
            are interested in booking an appointment, click the following button{" "}
          </HomeHeading>
          <BookNowButton>BOOK NOW</BookNowButton>
        </div>
      </HomeContainer>
    </Carousel.Item>
  </Carousel>
);

export default Home;
