import styled from "styled-components";

export const StyledNavbar = styled.div`
  background-color: #efe7df;
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: auto;
  position: sticky;
  top: 0px;
  z-index: 1110;
`;

export const StyledTitle = styled.div`
  font-size: 30px;
`;

export const StyledOptions = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const StyledLinks = styled.a`
  font-size: 20px;
  padding-left: 80px;
  text-decoration: none;
  color: black;
  &:hover {
    color: #935d27;
    cursor: pointer;
  }
`;
