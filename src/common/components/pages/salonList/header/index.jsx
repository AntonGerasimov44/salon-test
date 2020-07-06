import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  MainContainer,
  HeaderContainer,
  FilterContainer,
  FilterSelector,
  FilterElementContainer,
  FilterSelectorHeader,
  FilterElement,
  FiltersElements,
} from "./styles";
import arrowLeft from "../../../../assets/header/arrow.svg";
import filter from "../../../../assets/header/filter.svg";
import arrowDown from "../../../../assets/header/arrowDown.svg";
import { filtersData } from "../../../../constants";

const Header = ({
  isFilterOpen,
  setFilterOpen,
  changedFilter,
  isOpenFilterSelector,
  setOpenFilterSelector,
  changeFilterHandler,
}) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <Link to={"/"}>
          <img src={arrowLeft} alt={"arrowLeft"} />
        </Link>
        <h2>Hår</h2>
        <img
          src={filter}
          alt={"filter"}
          onClick={() => {
            setFilterOpen(!isFilterOpen);
            if (isFilterOpen) {
              setOpenFilterSelector(false);
            }
          }}
        />
      </HeaderContainer>
      <FilterContainer>
        <FilterSelector
          isFilterOpen={isFilterOpen}
          onClick={() => setOpenFilterSelector(!isOpenFilterSelector)}
        >
          <FilterSelectorHeader isSelectorOpen={isOpenFilterSelector}>
            {changedFilter.value
              ? `Pris ${changedFilter.label}`
              : "Inga filter valda"}
            <img src={arrowDown} alt={"arrowDown"} />
          </FilterSelectorHeader>
        </FilterSelector>
        <FilterElementContainer isSelectorOpen={isOpenFilterSelector}>
          <FiltersElements>
            {filtersData.map((filter) => (
              <FilterElement
                onClick={() => changeFilterHandler(filter)}
                isChangedFilter={filter.value === changedFilter.value}
                key={filter.id}
              >
                {filter.label}
              </FilterElement>
            ))}
          </FiltersElements>
        </FilterElementContainer>
      </FilterContainer>
    </MainContainer>
  );
};

Header.propTypes = {
  isFilterOpen: PropTypes.bool.isRequired,
  setFilterOpen: PropTypes.func.isRequired,
  changedFilter: PropTypes.object.isRequired,
  isOpenFilterSelector: PropTypes.bool.isRequired,
  setOpenFilterSelector: PropTypes.func.isRequired,
  changeFilterHandler: PropTypes.func.isRequired,
};

export default Header;
