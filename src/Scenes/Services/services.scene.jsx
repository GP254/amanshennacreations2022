import PageHeader from "../../Components/pageheader.component";
import Fade from "react-reveal/Fade";
import {
  ServicesContainer,
  ServicesContent,
  ServiceMainImg,
  ServiceImg,
  ServiceSection,
  ServiceHeading,
} from "./services.styles";
import CurlyText from "../../Components/Curly/curly.component";

const Services = () => {
  return (
    <div id="services">
      <PageHeader text={"Services"} />
      <ServicesContent>
        <Fade left duration={2000}>
          <ServiceMainImg src="services_main.jpeg" alt={""} />
        </Fade>
        <Fade right duration={2000}>
          <CurlyText
            text="At Amans Henna Creations, we offer a diverse range of henna services tailored to meet your needs for various events such as weddings, parties, baby showers, crowns, and customs. Whether you're located in the GTA or beyond, we're here to make your special occasion unforgettable with our stunning henna designs."
            curly
          />
        </Fade>
      </ServicesContent>
      <ServicesContainer>
        <Fade duration={2000}>
          <ServiceSection>
            <ServiceHeading>Party Henna</ServiceHeading>
            <ServiceImg src={"party.jpeg"} />
            <p>
              Looking to add a unique touch to your next party or special event?
              At Amans Henna Creations, we offer expert henna services that will
              make your celebration unforgettable. Whether you're hosting a
              birthday party, anniversary, corporate event, graduation, or any
              other type of party, our skilled artists can create stunning henna
              designs that will leave a lasting impression on your guests. Let
              us help you create a one-of-a-kind party experience with our
              exceptional henna services.
            </p>
          </ServiceSection>
          <ServiceSection>
            <ServiceHeading>Bridal Henna</ServiceHeading>
            <ServiceImg src={"bridal_pic.jpeg"} />
            <p>
              At Amans Henna Creations, we specialize in creating exquisite
              bridal henna designs that reflect your unique cultural traditions
              and personal style. Our experienced artists work closely with you
              to ensure that every detail of your bridal henna is perfect, from
              the intricate patterns to the use of natural, high-quality henna
              paste. Whether you're planning a traditional wedding or a fusion
              ceremony that blends multiple cultures, we are here to make your
              bridal henna experience unforgettable. Trust us to provide the
              highest quality bridal henna services that will elevate your
              special day to new heights.
            </p>
          </ServiceSection>
          <ServiceSection>
            <ServiceHeading>Baby Shower Henna</ServiceHeading>
            <ServiceImg src={"baby.jpeg"} />
            <p>
              At Amans Henna Creations, we offer henna services for baby showers
              that are a beautiful way to celebrate the arrival of your little
              one. Aman can create stunning designs on your hands or apply a
              special crown henna design on your baby bump, making your baby
              shower a unique and memorable experience. We use only the highest
              quality natural henna paste to ensure the safety and comfort of
              both the mother-to-be and the baby. Let us help you celebrate this
              special moment in your life with our exceptional henna services.
            </p>
          </ServiceSection>
          <ServiceSection>
            <ServiceHeading>Custom Henna</ServiceHeading>
            <ServiceImg src={"custom.jpeg"} />
            <p>
              At Amans Henna Creations, we believe that every event should be
              unique and personalized. That's why we offer custom henna services
              that allow you to choose from a wide range of styles, shapes, and
              patterns to create a one-of-a-kind design that perfectly suits
              your event. Whether you're looking to add a special touch to a
              corporate event, birthday party, or any other special occasion,
              our skilled artists can create stunning henna designs that will
              exceed your expectations. Trust us to provide the highest quality
              custom henna services that will make your event unforgettable.
            </p>
          </ServiceSection>
        </Fade>
      </ServicesContainer>
    </div>
  );
};

export default Services;
