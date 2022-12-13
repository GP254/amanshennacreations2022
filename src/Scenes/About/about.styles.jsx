import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  height:100vh;
  justify-content: space-between;
  padding: 100px;
  overflow: auto;
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
