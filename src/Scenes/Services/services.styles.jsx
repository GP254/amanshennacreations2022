import styled from "styled-components";

export const ServicesContent = styled.div`
  align-items: center;
  display: flex;
  margin: 40px 0;
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

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceMainImg = styled.img`
  width: 350px;
  height: 350px;
`;

export const ServiceImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const ServiceSection = styled.div`
  width: 100%;
  font-size: 20px;
`;

export const ServiceHeading = styled.div`
  font-size: 25px;
`;
