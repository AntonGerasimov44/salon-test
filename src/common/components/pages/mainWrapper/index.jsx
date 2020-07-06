import React from "react";

import { MainContainer } from "./styles";

const MainWrapper = ({ children }) => {
  return <MainContainer>{React.cloneElement(children)}</MainContainer>;
};

export default MainWrapper;
