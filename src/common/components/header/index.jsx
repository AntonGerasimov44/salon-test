import React from "react";
import PropTypes from "prop-types";

import { MainContainer, StyledLink } from "./styles";
import arrowLeft from "../../assets/header/arrow.svg";

const Header = ({ title }) => {
  return (
    <MainContainer>
      <StyledLink to={"/"}>
        <img src={arrowLeft} alt={"arrow"} />
      </StyledLink>
      <h2>{title}</h2>
    </MainContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
