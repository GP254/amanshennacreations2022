import PageHeader from "../../Components/pageheader.component";
import { ServicesContainer, ServiceImg } from "./services.styles";
import CurlyText from "../../Components/Curly/curly.component";

const Services = () => (
  <div id="services">
    <PageHeader text={"Services"} />
    <ServicesContainer>
      <ServiceImg src="serviceIMG1.png" alt={""} />
      <CurlyText
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid et, fugit illum ipsam praesentium. Accusantium amet eaque explicabo iusto nulla numquam odio ratione repudiandae, sapiente sit ut, vitae!"
        }
      />
    </ServicesContainer>
  </div>
);

export default Services;
