import styled from "styled-components";

export const GalleryContainer = styled.div`
  height: 100vh;
  padding: 100px;
  overflow: auto;
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledImages = styled.img``;
