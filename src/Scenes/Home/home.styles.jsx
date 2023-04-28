import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  background-image: url("home_img.JPG");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 750px;
  align-items: center;
  padding: 50px 0;
  margin: 0 auto;
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

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookNowButton = styled.button`
  width: 200px;
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
  height: 440px;
  width: 440px;
  box-shadow: #efe7df -60px 60px;
  margin-left: 60px;
  margin-bottom: 60px;
`;

export const HomeImageLarge = styled.img`
  width: 500px;
  height: 500px;
`;

export const HomeHeading = styled.div`
  padding: 12px;
  text-align: center;
  font-size: 40px;
  font-family: "Savoye LET";
`;
