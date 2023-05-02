import styled from "styled-components";

export const StyledContacts = styled.div`
  @media screen and (min-width: 1001px) {
    display: flex;
    justify-content: space-evenly;
    margin: auto 0;
    flex-wrap: nowrap;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  flex-wrap: wrap;
  padding: 50px;
  -webkit-animation: fadeIn ease 3s;
`;

export const StyledContactsText = styled.div`
  width: 100%;
  text-align: center;
  margin: auto 0;
  font-size: 30px;
  font-weight: lighter;
`;
