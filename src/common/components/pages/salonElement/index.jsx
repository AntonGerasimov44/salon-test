import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  MainContainer,
  HeaderContainer,
  Header,
  TextRatingContainer,
  ContentContainer,
  RatingContainer,
  StarImageContainer,
  StarsContainer,
  FavouriteIconContainer,
} from "./styles";
import salonsData from "../../../constants/saloonsData.json";
import { initialSalonData } from "../../../constants";
import arrowLeft from "../../../assets/salonElement/arrowLeft.svg";
import { ReactComponent as HeartIcon } from "../../../assets/salonElement/heart.svg";
import { ReactComponent as Star } from "../../../assets/salonElement/star.svg";
import InfoContainer from "./infoContainer";

const SalonElement = ({ match }) => {
  const { id } = match.params;
  const [changedMenuElement, setChangedMenuElement] = useState("info");
  const [favouritesElements, setFavouritesElements] = useState([]);
  const changedSalonElement = useMemo(
    () => salonsData.saloons.find((elem) => elem.id === id) || initialSalonData,
    [id]
  );
  const { avatarImage, name, rate, feedbacks } = changedSalonElement;

  const changeFavouriteHandler = () => {
    if (localStorage.getItem("favourites")) {
      const favouriteData = JSON.parse(localStorage.getItem("favourites"));

      if (Array.isArray(favouriteData)) {
        const indexOfIncludedElement = favouriteData.indexOf(id);

        if (indexOfIncludedElement !== -1) {
          favouriteData.splice(indexOfIncludedElement, 1);
        } else {
          favouriteData.push(id);
        }

        setFavouritesElements(favouriteData);
        localStorage.setItem("favourites", JSON.stringify(favouriteData));
      }
    } else {
      setFavouritesElements([id]);
      localStorage.setItem("favourites", JSON.stringify([id]));
    }
  };

  useEffect(() => {
    const favouriteData = JSON.parse(localStorage.getItem("favourites"));

    if (favouriteData && Array.isArray(favouriteData)) {
      setFavouritesElements(favouriteData);
    }
  }, []);

  return (
    <MainContainer>
      <HeaderContainer>
        <img src={avatarImage} alt={"avatar"} />
        <ContentContainer>
          <Header>
            <Link to={"/salonPage"}>
              <img src={arrowLeft} alt={"arrowLeft"} />
            </Link>
            <FavouriteIconContainer
              onClick={changeFavouriteHandler}
              isFilled={favouritesElements.includes(id)}
            >
              <HeartIcon />
            </FavouriteIconContainer>
          </Header>
          <TextRatingContainer>
            <h1>{name}</h1>
            <RatingContainer>
              <StarsContainer>
                {[1, 2, 3, 4, 5].map((elem, key) => (
                  <StarImageContainer isFilled={elem <= rate} key={key}>
                    <Star />
                  </StarImageContainer>
                ))}
              </StarsContainer>
              <p>({feedbacks})</p>
            </RatingContainer>
          </TextRatingContainer>
        </ContentContainer>
      </HeaderContainer>
      <InfoContainer
        changedMenuElement={changedMenuElement}
        setChangedMenuElement={setChangedMenuElement}
        changedSalonElement={changedSalonElement}
      />
    </MainContainer>
  );
};

SalonElement.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SalonElement;
