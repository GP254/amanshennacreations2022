import styled from "styled-components";

export const StyledNavbar = styled.div`
  background-image: linear-gradient(#c2a88e, black);
  padding: 10px 0;
  overflow: auto;
  position: sticky;
  top: 0;
  z-index: 1110;
`;

export const StyledItemWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  width: 1000px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.div`
  font-size: 18px;
`;

export const StyledOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLinks = styled.a`
  font-size: 12px;
  margin-left: 80px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #935d27;
    cursor: pointer;
  }
`;

export const StyledLogo = styled.img`
  height: 60px;
`;
