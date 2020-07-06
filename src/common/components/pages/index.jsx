import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import SalonList from "./salonList";
import CategoryList from "./categories";
import SalonElement from "./salonElement";
import MainWrapper from "./mainWrapper";
import Favorites from "./favorites";

const Routers = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/categories"} />
        </Route>
        <Route exact path={"/categories"} component={CategoryList} />
        <Route exact path={"/favorites"} component={Favorites} />
        <Route exact path={"/salonPage"} component={SalonList} />
        <Route path="/salonPage/:id" component={SalonElement} />
      </Switch>
    </MainWrapper>
  );
};

export default Routers;
