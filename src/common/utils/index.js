export const getFilteredSaloonsData = (saloonsData, changedFilter) => {
  if (changedFilter) {
    if (changedFilter === "LESS_100") {
      return saloonsData.filter((elem) => {
        const price = +elem.price;

        return price < 100;
      });
    } else if (changedFilter === "100 - 250") {
      return saloonsData.filter((elem) => {
        const price = +elem.price;

        return price >= 100 && price < 250;
      });
    } else if (changedFilter === "250 - 500") {
      return saloonsData.filter((elem) => {
        const price = +elem.price;

        return price >= 250 && price < 500;
      });
    } else if (changedFilter === "OVER_500") {
      return saloonsData.filter((elem) => {
        const price = +elem.price;

        return price > 500;
      });
    }
  } else {
    return saloonsData;
  }
};
