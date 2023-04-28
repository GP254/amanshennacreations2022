import PageHeader from "../../Components/pageheader.component";
import {
  ServicesContainer,
  ServicesContent,
  ServiceMainImg,
  ServiceImg,
  ServiceDropdown,
  ServiceDropdownContent,
} from "./services.styles";
import CurlyText from "../../Components/Curly/curly.component";
import { useState } from "react";

/*
{showDrop ? (
            <img
              src={"caret-up-fill.svg"}
              width={"30px"}
              height={"30px"}
              alt=""
            />
          ) : (
            <img
              src={"caret-down-fill.svg"}
              width={"30px"}
              height={"30px"}
              alt=""
            />
          )}
*/

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const createOnClick = (i) => () => {
    if (selectedIndex === i) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(i);
    }
  };

  const Caret = ({ num }) => {
    return (
      <div>
        {num ? (
          <img
            src={"caret-up-fill.svg"}
            width={"30px"}
            height={"30px"}
            alt=""
          />
        ) : (
          <img
            src={"caret-down-fill.svg"}
            width={"30px"}
            height={"30px"}
            alt=""
          />
        )}
      </div>
    );
  };

  return (
    <div id="services">
      <PageHeader text={"Services"} />
      <ServicesContainer>
        <ServicesContent>
          <CurlyText
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid et, fugit illum ipsam praesentium. Accusantium amet eaque explicabo iusto nulla numquam odio ratione repudiandae, sapiente sit ut, vitae!"
            curly
          />
        </ServicesContent>

        <ServiceDropdown onClick={createOnClick(1)}>
          Party Henna
          <Caret num={selectedIndex} />
        </ServiceDropdown>
        {selectedIndex === 1 ? <PartyDrop /> : null}
        <ServiceDropdown onClick={createOnClick(2)}>
          Bridal Henna
          <Caret num={selectedIndex} />
        </ServiceDropdown>
        {selectedIndex === 2 ? <BridalDrop /> : null}
        <ServiceDropdown onClick={createOnClick(3)}>
          Baby Shower Henna
          <Caret num={selectedIndex} />
        </ServiceDropdown>
        {selectedIndex === 3 ? <BabyShowerDrop /> : null}
        <ServiceDropdown onClick={createOnClick(4)}>
          Custom Henna
          <Caret num={selectedIndex} />
        </ServiceDropdown>
        {selectedIndex === 4 ? <CustomDrop /> : null}
      </ServicesContainer>
    </div>
  );
};

const PartyDrop = () => (
  <div>
    <ServiceDropdownContent>
      <ServiceImg src="partyhenna.png" alt={""} />
      <CurlyText
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid et, fugit illum ipsam praesentium. Accusantium amet eaque explicabo iusto nulla numquam odio ratione repudiandae, sapiente sit ut, vitae!"
        }
      />
    </ServiceDropdownContent>
  </div>
);

const BridalDrop = () => (
  <div>
    <ServiceDropdownContent>
      <ServiceImg src="partyhenna.png" alt={""} />
      <CurlyText
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid et, fugit illum ipsam praesentium. Accusantium amet eaque explicabo iusto nulla numquam odio ratione repudiandae, sapiente sit ut, vitae!"
        }
      />
    </ServiceDropdownContent>
  </div>
);

const BabyShowerDrop = () => (
  <div>
    <ServiceDropdownContent>
      <ServiceImg src="partyhenna.png" alt={""} />
      <CurlyText
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid et, fugit illum ipsam praesentium. Accusantium amet eaque explicabo iusto nulla numquam odio ratione repudiandae, sapiente sit ut, vitae!"
        }
      />
    </ServiceDropdownContent>
  </div>
);

const CustomDrop = () => (
  <div>
    <ServiceDropdownContent>
      <ServiceImg src="partyhenna.png" alt={""} />
      <CurlyText
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid et, fugit illum ipsam praesentium. Accusantium amet eaque explicabo iusto nulla numquam odio ratione repudiandae, sapiente sit ut, vitae!"
        }
      />
    </ServiceDropdownContent>
  </div>
);

export default Services;
