import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  height:100vh;
  justify-content: center;
  overflow: auto;
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  overflow-x: hidden;
`;

export const ServiceImg = styled.img`
  width: 600px;
  height: 600px;
`;


