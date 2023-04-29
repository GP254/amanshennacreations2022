import PageHeader from "../../Components/pageheader.component";
import Fade from "react-reveal/Fade";
import {
  ServicesContainer,
  ServicesContent,
  ServiceMainImg,
  ServiceImg,
  ServiceDropdown,
  ServiceDropdownContent,
  ServiceHeader,
  ServiceSection,
  ServiceHeading,
} from "./services.styles";
import CurlyText from "../../Components/Curly/curly.component";

const Services = () => {
  return (
    <div id="services">
      <PageHeader text={"Services"} />
      <ServicesContainer>
        <Fade>
          <ServicesContent>
            <ServiceMainImg src="services_main.jpeg" alt={""} />
            <CurlyText
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid et, fugit illum ipsam praesentium. Accusantium amet eaque explicabo iusto nulla numquam odio ratione repudiandae, sapiente sit ut, vitae!"
              curly
            />
          </ServicesContent>
          <ServiceSection>
            <ServiceHeading>Party Henna</ServiceHeading>
            <ServiceImg src={"party.jpeg"} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
              culpa enim eveniet optio recusandae, similique vero voluptatibus?
              Aspernatur atque dicta exercitationem itaque perferendis quaerat
              voluptatibus! Cupiditate odit officia vel.
            </p>
          </ServiceSection>
          <ServiceSection>
            <ServiceHeading>Bridal Henna</ServiceHeading>
            <ServiceImg src={"bridal_pic.jpeg"} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
              culpa enim eveniet optio recusandae, similique vero voluptatibus?
              Aspernatur atque dicta exercitationem itaque perferendis quaerat
              voluptatibus! Cupiditate odit officia vel.
            </p>
          </ServiceSection>
          <ServiceSection>
            <ServiceHeading>Baby Shower Henna</ServiceHeading>
            <ServiceImg src={"baby.jpeg"} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
              culpa enim eveniet optio recusandae, similique vero voluptatibus?
              Aspernatur atque dicta exercitationem itaque perferendis quaerat
              voluptatibus! Cupiditate odit officia vel.
            </p>
          </ServiceSection>
          <ServiceSection>
            <ServiceHeading>Custom Henna</ServiceHeading>
            <ServiceImg src={"custom.jpeg"} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
              culpa enim eveniet optio recusandae, similique vero voluptatibus?
              Aspernatur atque dicta exercitationem itaque perferendis quaerat
              voluptatibus! Cupiditate odit officia vel.
            </p>
          </ServiceSection>
        </Fade>
      </ServicesContainer>
    </div>
  );
};

export default Services;
