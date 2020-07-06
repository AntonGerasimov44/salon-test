import React from "react";
import PropTypes from "prop-types";

import {
  MainContainer,
  SalonElement,
  NameContainer,
  PriceContainer,
  InfoContainer,
  TimeContainer,
  RateContainer,
  Rating,
  StarContainer,
  PriceInfoContainer,
  StyledLink,
} from "./styles";
import { ReactComponent as Star } from "../../../../assets/salonList/star.svg";
import arrowRight from "../../../../assets/salonList/arrowRight.svg";

const SaloonsContainer = ({ filteredSaloonsData }) => {
  return (
    <MainContainer>
      {filteredSaloonsData.map((elem) => {
        const {
          id,
          name,
          price,
          time,
          rate,
          feedbacks,
          address,
          salonOpenTime,
        } = elem;
        const { open } = salonOpenTime;

        return (
          <StyledLink to={`/salonPage/${id}`} key={id}>
            <SalonElement>
              <InfoContainer>
                <TimeContainer>
                  <p>{open}</p>
                </TimeContainer>
                <NameContainer>
                  <h2>{name}</h2>
                  <RateContainer>
                    <Rating>
                      {[1, 2, 3, 4, 5].map((elem, key) => (
                        <StarContainer isFilled={elem <= rate} key={key}>
                          <Star />
                        </StarContainer>
                      ))}
                    </Rating>
                    ({feedbacks})
                  </RateContainer>
                  <h3>{address}</h3>
                </NameContainer>
              </InfoContainer>
              <PriceContainer>
                <PriceInfoContainer>
                  <h3>{price} kr</h3>
                  <p>{time} min</p>
                </PriceInfoContainer>
                <img src={arrowRight} alt={"arrowRight"} />
              </PriceContainer>
            </SalonElement>
          </StyledLink>
        );
      })}
    </MainContainer>
  );
};

SaloonsContainer.propTypes = {
  filteredSaloonsData: PropTypes.array.isRequired,
};

export default SaloonsContainer;
