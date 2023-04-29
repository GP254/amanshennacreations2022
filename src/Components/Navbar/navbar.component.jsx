import {
  StyledNavbar,
  StyledLinks,
  StyledOptions,
  StyledItemWrapper,
  StyledLogo,
} from "./navbar.styles";

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledItemWrapper>
        <StyledLogo src="logo.png" />
        <StyledOptions role="nav">
          <StyledLinks href="#home">HOME</StyledLinks>
          <StyledLinks href="#services">SERVICES</StyledLinks>
          <StyledLinks href="#about">ABOUT</StyledLinks>
          <StyledLinks href="#gallery">GALLERY</StyledLinks>
          <StyledLinks href="#contact">CONTACT</StyledLinks>
        </StyledOptions>
      </StyledItemWrapper>
    </StyledNavbar>
  );
};

export default NavBar;
