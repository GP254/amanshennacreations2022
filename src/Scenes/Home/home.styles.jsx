import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
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

export const BookNowButton = styled.button`
  width: 330px;
  height: 100px;
  font-size: 25px;
  background-color: #efe7df;
  color: rgba(147, 93, 39);
  box-shadow: lightgrey 5px 5px;
  border: 0px;
  &:active {
    box-shadow: lightgrey 0px 0px;
  }
`;

export const HomeImageSmall = styled.img`
  height: 500px;
  width: 500px;
  box-shadow: #efe7df -60px 60px;
`;

export const HomeImageLarge = styled.img`
  background-repeat: repeat;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const HomeHeading = styled.div`
  font-size: 53px;
  font-family: "Savoye LET";
  width: 500px;
`;
