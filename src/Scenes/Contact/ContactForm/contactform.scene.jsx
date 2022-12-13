import React from "react";
import emailjs from "emailjs-com";

import {
  StyledContactsForm,
  StyledInput,
  StyledTextArea,
  StyledForm,
  StyledButton,
} from "./contactform.styles";

const ContactsForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "amans-henna-creations",
        "template_gk1dgqo",
        e.target,
        "user_ytPHfPPaizWOBHTTF0bnS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <StyledContactsForm onSubmit={sendEmail}>
      <StyledForm>
        <StyledInput placeholder="Name" name="name" />
      </StyledForm>
      <StyledForm>
        <StyledInput placeholder="Email" name="email" />
      </StyledForm>
      <StyledForm>
        <StyledTextArea placeholder="Message" name="message" />
      </StyledForm>
      <StyledButton type="submit">Send</StyledButton>
    </StyledContactsForm>
  );
};

export default ContactsForm;
