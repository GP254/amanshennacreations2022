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
          "Amandeep Sihra is the talented founder and visionary henna artist behind Amans Henna Creations. Based in Brampton, Ontario, Amandeep has been providing exceptional henna services to clients throughout the GTA and beyond. With a passion for henna artistry and an unwavering commitment to excellence, Amandeep has become a highly sought-after henna artist in the industry. With their unparalleled creativity and attention to detail, Amandeep can transform your vision into a stunning work of art that you'll cherish for years to come. Trust Amandeep to provide the highest quality henna services and create an unforgettable experience for your special occasion"
        }
        curly={true}
      />
    </AboutContainer>
  </div>
);

export default About;
