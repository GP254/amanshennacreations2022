import styled from "styled-components";

export const AboutContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
  padding: 50px 0;
  width: 100%;
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
  overflow-x: hidden;
`;

export const AboutImg = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  align-self: center;
`;
