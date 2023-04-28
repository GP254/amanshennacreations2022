import styled from "styled-components";

export const ServicesContent = styled.div`
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

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceMainImg = styled.img`
  width: 500px;
  height: 500px;
`;

export const ServiceImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const ServiceDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border: solid black;
  width: 1000px;
  font-size: 20px;
  margin-bottom: 10px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const ServiceDropdownContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 1000px;
  font-size: 20px;
`;
