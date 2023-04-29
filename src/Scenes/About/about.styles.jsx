import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #c2a88e;
  color: white;
  display: flex;
  justify-content: center;
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
  overflow-x: hidden;
`;

export const AboutImg = styled.img`
  height: 400px;
  align-self: center;
`;
