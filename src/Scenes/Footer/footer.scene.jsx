import {
  StyledColumn,
  StyledFooter,
  StyledHeader,
  StyledImg,
} from "./footer.styles";

const Footer = () => (
  <StyledFooter>
    <StyledColumn>
      <StyledHeader>Contact</StyledHeader>
      <p>647-929-9083</p>
      <p>amanshennacreations@gmail.com</p>
      <p>Native Landing, Brampton, ON L6X 5A</p>
    </StyledColumn>
    <StyledColumn>
      <StyledHeader>Quick Links</StyledHeader>
      <a href={"#home"}>Home</a>
      <a href={"#services"}>Services</a>
      <a href={"#about"}>About</a>
      <a href={"#gallery"}>Gallery</a>
      <a href={"#contact"}>Contacts</a>
    </StyledColumn>
    <StyledColumn>
      <StyledHeader>Social Media</StyledHeader>
      <div>
        <StyledImg
          src={"instagram.svg"}
          width={"25px"}
          height={"25px"}
          onClick={() =>
            window.open(
              "https://www.instagram.com/amans.henna.creations/?hl=en"
            )
          }
          alt=""
        />
        <StyledImg
          src={"facebook.svg"}
          width={"25px"}
          height={"25px"}
          onClick={() =>
            window.open("https://www.facebook.com/amanshennacreations/")
          }
          alt=""
        />
        <StyledImg
          src={"tiktok.svg"}
          width={"25px"}
          height={"25px"}
          onClick={() =>
            window.open("https://www.tiktok.com/@amans.henna.creations")
          }
          alt=""
        />
      </div>
    </StyledColumn>
  </StyledFooter>
);

export default Footer;
