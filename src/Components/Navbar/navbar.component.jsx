import {
  StyledNavbar,
  StyledLinks,
  StyledOptions,
  StyledItemWrapper,
  StyledLogo,
} from "./navbar.styles";
import Fade from "react-reveal/Fade";

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledItemWrapper>
        <Fade left duration={2000}>
          <StyledLogo src="logo.png" />
        </Fade>
        <StyledOptions role="nav">
          <Fade left duration={2000}>
            <StyledLinks href="#home">HOME</StyledLinks>
            <StyledLinks href="#services">SERVICES</StyledLinks>
            <StyledLinks href="#about">ABOUT</StyledLinks>
            <StyledLinks href="#gallery">GALLERY</StyledLinks>
            <StyledLinks href="#contact">CONTACT</StyledLinks>
          </Fade>
        </StyledOptions>
      </StyledItemWrapper>
    </StyledNavbar>
  );
};

export default NavBar;
