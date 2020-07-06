import React, { useMemo } from "react";

import { MainContainer, NotHaveSaloonsData } from "./styles";
import Header from "../../header";
import SalonsList from "../salonList/saloonsContainer";
import salonsData from "../../../constants/saloonsData.json";

const FavouritesContainer = () => {
  const filteredSalonsData = useMemo(() => {
    const favouritesSalons = JSON.parse(localStorage.getItem("favourites"));

    if (favouritesSalons && Array.isArray(favouritesSalons)) {
      return salonsData.saloons.filter((elem) =>
        favouritesSalons.includes(elem.id)
      );
    } else {
      return [];
    }
  }, []);

  return (
    <MainContainer>
      <Header title={"Favoriter"} />
      {filteredSalonsData.length < 1 ? (
        <NotHaveSaloonsData>Du har inte valt salonger</NotHaveSaloonsData>
      ) : (
        <SalonsList filteredSaloonsData={filteredSalonsData} />
      )}
    </MainContainer>
  );
};

export default FavouritesContainer;
