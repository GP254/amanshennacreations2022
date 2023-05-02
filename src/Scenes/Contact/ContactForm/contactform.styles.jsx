import styled from "styled-components";

export const StyledContactsForm = styled.form`
  @media screen and (min-width: 1001px) {
    width: 100%;
  }
  background: #ffffff;
`;

export const StyledForm = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 18px 5px;
  background-color: #f3f3f4;
  height: fit-content;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  outline: none;
  border: 0;
  font-size: 16px;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  background-color: transparent;
  outline: none;
  border: 0;
  font-size: 16px;
  min-width: 100%;
  resize: vertical;
`;

export const StyledButton = styled.button`
  font-size: 15px;
  border: black 0.5px solid;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: #efe7df;
  color: #935d27;
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;
