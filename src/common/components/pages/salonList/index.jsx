import React, { useState, useEffect, useMemo } from "react";
import qs from "qs";
import { useHistory } from "react-router-dom";

import { MainContainer } from "./styles";
import saloonsData from "../../../constants/saloonsData.json";
import Header from "./header";
import { filtersData } from "../../../constants";
import { getFilteredSaloonsData } from "../../../utils";
import SaloonsContainer from "./saloonsContainer";

const SalonList = () => {
  const history = useHistory();
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [changedFilter, setChangedFilter] = useState(filtersData[0]);
  const [isOpenFilterSelector, setOpenFilterSelector] = useState(false);

  const filteredSaloonsData = useMemo(() => {
    const { value } = changedFilter;

    return getFilteredSaloonsData(saloonsData.saloons, value);
  }, [changedFilter]);

  useEffect(() => {
    const { location } = history;
    const { search } = location;
    const searchData = search.slice(1);
    const { price } = qs.parse(searchData);

    if (price) {
      const changedFilter = filtersData.find((elem) => elem.value === price);

      if (changedFilter) {
        setChangedFilter(changedFilter);
      }
    }
  }, [history]);

  useEffect(() => {
    const { value } = changedFilter;
    if (value) {
      const stringifyFilters = qs.stringify({
        price: value,
      });
      history.push({
        pathname: "/salonPage",
        search: `${stringifyFilters}`,
      });
    } else {
      history.push({
        pathname: "/salonPage",
      });
    }
  }, [changedFilter, history]);

  const changeFilterHandler = (filter) => {
    setChangedFilter(filter);
    setOpenFilterSelector(false);
  };

  return (
    <MainContainer>
      <Header
        isFilterOpen={isFilterOpen}
        setFilterOpen={setFilterOpen}
        changedFilter={changedFilter}
        isOpenFilterSelector={isOpenFilterSelector}
        setOpenFilterSelector={setOpenFilterSelector}
        changeFilterHandler={changeFilterHandler}
      />
      <SaloonsContainer filteredSaloonsData={filteredSaloonsData} />
    </MainContainer>
  );
};

export default SalonList;
