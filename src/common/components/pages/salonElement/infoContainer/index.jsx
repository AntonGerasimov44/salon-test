import React from "react";
import PropTypes from "prop-types";

import { MainContainer, MenuElement, Menu, ChangedMenuLine } from "./styles";
import InfoTab from "./tabs/infoTab";
import SchemaTab from "./tabs/schemaTab";

const InfoContainer = ({
  changedMenuElement,
  setChangedMenuElement,
  changedSalonElement,
}) => {
  return (
    <MainContainer>
      <Menu>
        <MenuElement onClick={() => setChangedMenuElement("info")}>
          info
        </MenuElement>
        <MenuElement onClick={() => setChangedMenuElement("schema")}>
          schema
        </MenuElement>
        <ChangedMenuLine left={changedMenuElement === "info" ? "0" : "50%"} />
      </Menu>
      {changedMenuElement === "info" ? (
        <InfoTab changedSalonElement={changedSalonElement} />
      ) : (
        <SchemaTab />
      )}
    </MainContainer>
  );
};

InfoContainer.propTypes = {
  changedMenuElement: PropTypes.string.isRequired,
  setChangedMenuElement: PropTypes.func.isRequired,
  changedSalonElement: PropTypes.object.isRequired,
};

export default InfoContainer;
