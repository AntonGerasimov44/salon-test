import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles, GlobalFonts } from "./GlobalStyles";
import Pages from "./common/components/pages";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <GlobalFonts />
        <GlobalStyles />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
