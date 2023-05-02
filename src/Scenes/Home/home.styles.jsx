import styled from "styled-components";

export const HomeContainer = styled.div`
  justify-content: right;
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

export const HomeHeading = styled.div`
  padding: 12px;
  margin-right: 200px;
  display: flex;
  color: white;
  text-align: center;
  font-size: 45px;
  font-family: "Savoye LET";
`;
