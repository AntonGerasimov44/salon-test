import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  background: #f9f9f9;
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  img {
    max-width: 100%;
    z-index: 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  box-sizing: border-box;

  img {
    position: relative;
  }
`;

export const TextRatingContainer = styled.div`
  z-index: 1;
  h1 {
    color: #ffffff;
    font-family: "Miller Banner";
    font-weight: 300;
    font-size: 22px;
    margin: 0;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 13px;
    font-weight: 300;
    opacity: 0.8;
    color: #ffffff;
    margin: 0 0 0 10px;
    padding: 0;
    letter-spacing: normal;
    line-height: normal;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
`;
export const StarImageContainer = styled.div`
  margin-left: 5px;
  fill: transparent;
  ${({ isFilled }) =>
    isFilled &&
    css`
      fill: #b69f58;
    `};

  :first-child {
    margin: 0;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 9%,
    rgba(0, 0, 0, 0) 24%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0) 49%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.22) 61%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0.76) 88%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const FavouriteIconContainer = styled.div`
  fill: transparent;

  ${({ isFilled }) =>
    isFilled &&
    css`
      fill: #fff;
    `};
`;
