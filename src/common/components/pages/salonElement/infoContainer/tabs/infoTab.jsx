import React from "react";
import PropTypes from "prop-types";

import { MainContainer, InfoElement } from "./styles";
import positionImage from "../../../../../assets/salonElement/position.png";
import clockImage from "../../../../../assets/salonElement/clock.svg";
import phoneImage from "../../../../../assets/salonElement/phone.svg";
import earthImage from "../../../../../assets/salonElement/globe.svg";

const InfoTab = ({ changedSalonElement }) => {
  const {
    address,
    cityData,
    salonOpenTime,
    phone,
    website,
    description,
  } = changedSalonElement;
  const { close } = salonOpenTime;

  return (
    <MainContainer>
      <InfoElement>
        <img src={positionImage} alt={"position"} /> {address}, {cityData}
      </InfoElement>
      <InfoElement>
        <img src={clockImage} alt={"clck"} /> Öppet till {close} idag
      </InfoElement>
      <InfoElement>
        <img src={phoneImage} alt={"phone"} /> {phone}
      </InfoElement>
      <InfoElement>
        <img src={earthImage} alt={"earth"} /> {website}
      </InfoElement>
      <InfoElement>{description}</InfoElement>
    </MainContainer>
  );
};

InfoTab.propTypes = {
  changedSalonElement: PropTypes.object.isRequired,
};

export default InfoTab;
