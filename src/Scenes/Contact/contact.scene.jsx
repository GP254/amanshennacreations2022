import PageHeader from "../../Components/pageheader.component";
import { StyledContacts, StyledContactsText } from "./contact.styles";
import ContactsForm from "./ContactForm/contactform.scene";

const Contact = () => (
  <div id="contact">
    <PageHeader text={"Contact Us"} />
    <StyledContacts>
      <StyledContactsText>
        <p>647-929-9083</p>
        <p>amanshennacreations@gmail.com</p>
        <p>Native Landing, Brampton, ON L6X 5A</p>
      </StyledContactsText>
      <ContactsForm />
    </StyledContacts>
  </div>
);

export default Contact;
