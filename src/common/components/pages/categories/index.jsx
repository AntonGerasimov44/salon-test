import React from "react";

import { MainContainer, CategoryContainer, CategoryElement } from "./styles";
import Header from "../../header";
import { categoriesList } from "../../../constants";

const Categories = () => {
  return (
    <MainContainer>
      <Header title={"ändra kategori"} />
      <CategoryContainer>
        {categoriesList.map((elem, key) => {
          const { link, name } = elem;

          return (
            <CategoryElement to={link} key={key}>
              {name}
            </CategoryElement>
          );
        })}
      </CategoryContainer>
    </MainContainer>
  );
};

export default Categories;
