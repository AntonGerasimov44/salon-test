export const filtersData = [
  {
    id: "9oXI625v",
    label: "Inga filter valda",
    value: null,
  },
  {
    id: "WCBaoiWx",
    label: "Mindre 100 kr",
    value: "LESS_100",
  },
  {
    id: "RPRmrDkE",
    label: "100 - 250 kr",
    value: "100 - 250",
  },
  {
    id: "vtDFlHfm",
    label: "250 - 500 kr",
    value: "250 - 500",
  },
  {
    id: "6g68bPNn",
    label: "Mer 500 kr",
    value: "OVER_500",
  },
];

export const initialSalonData = {
  id: "",
  name: "",
  price: 0,
  rate: 0,
  feedbacks: 0,
  time: 0,
  address: "",
  cityData: "",
  avatarImage: "../assets/salonElement/backgroundImage.jpg",
  salonOpenTime: {
    open: "00:00",
    close: "00:00",
  },
  phone: "",
  website: "",
  description: "",
};

export const categoriesList = [
  {
    name: "Hår",
    link: "/salonPage",
  },
  {
    name: "Favoriter",
    link: "/favorites",
  },
];
