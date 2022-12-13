import {
  StyledNavbar,
  StyledLinks,
  StyledOptions,
  StyledTitle,
} from "./navbar.styles";

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledTitle>AMANS HENNA CREATIONS</StyledTitle>
      <StyledOptions role="nav">
        <a href="#home">
          <StyledLinks>HOME</StyledLinks>
        </a>
        <a href="#services">
          <StyledLinks>SERVICES</StyledLinks>
        </a>
        <a href="#about">
          <StyledLinks>ABOUT</StyledLinks>
        </a>
        <a href="#gallery">
          <StyledLinks>GALLERY</StyledLinks>
        </a>
        <a href="#contact">
          <StyledLinks>CONTACT</StyledLinks>
        </a>
      </StyledOptions>
    </StyledNavbar>
  );
};

export default NavBar;
