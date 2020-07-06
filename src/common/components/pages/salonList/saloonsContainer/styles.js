import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const SalonElement = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #eeeeee;
  h2 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  img {
    align-self: center;
    margin-left: 30px;
  }

  @media (max-width: 350px) {
    img {
      margin-left: 15px;
    }
  }
`;

export const PriceInfoContainer = styled.div`
  margin-top: 5px;
  h3 {
    color: #202020;
    font-size: 15px;
    font-weight: normal;
  }

  p {
    color: #656565;
    font-weight: 300;
    font-size: 13px;
    margin-top: 10px;
  }
`;

export const TimeContainer = styled.div`
  p {
    font-size: 15px;
    color: #202020;
    font-weight: normal;
    margin-top: 5px;
  }
`;

export const NameContainer = styled.div`
  margin-left: 15px;
  h2 {
    font-size: 20px;
    font-family: "Miller Banner";
    font-weight: 300;
    color: #202020;
  }

  h3 {
    font-size: 15px;
    color: #666666;
    font-weight: 300;
    margin-top: 12px;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  font-size: 11px;
  font-weight: 300px;
  color: #656565;
  margin-top: 13px;
`;

export const Rating = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const StarContainer = styled.div`
  margin-left: 5px;
  fill: transparent;
  ${({ isFilled }) =>
    isFilled &&
    css`
      fill: #b69f58;
    `};

  :first-child {
    margin-left: 0;
  }
`;
