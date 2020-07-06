import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  border-bottom: 2px solid #dbd0ac;
  h2 {
    font-family: "Miller Banner";
    font-weight: 300;
    margin: 0;
    font-size: 22px;
  }

  img {
    margin: 0;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
`;

export const FilterSelectorHeader = styled.div`
  width: 100%;
  font-weight: 300;
  color: #202020;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    transition: 0.4s;
  }

  ${({ isSelectorOpen }) =>
    isSelectorOpen &&
    css`
      img {
        transform: rotate(180deg);
      }
    `};
`;

export const FilterSelector = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0;
  padding: 0;
  border-bottom: none;
  transition: 0.3s ease;
  box-sizing: border-box;
  opacity: 0;
  position: relative;

  ${FilterSelectorHeader} {
    opacity: 0;
    height: 0;
    transition: 0.4s ease-in;
  }

  ${({ isFilterOpen }) =>
    isFilterOpen &&
    css`
      padding: 15px;
      height: 50px;
      opacity: 1;
      border-bottom: 2px solid #dbd0ac;

      ${FilterSelectorHeader} {
        opacity: 1;
        height: auto;
      }
    `};
`;

export const FiltersElements = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const FilterElementContainer = styled.div`
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  border-bottom: none;

  ${FiltersElements} {
    height: 0;
    border-bottom: none;
    opacity: 0;
    transition: 0.4s ease-in;
  }

  ${({ isSelectorOpen }) =>
    isSelectorOpen &&
    css`
      ${FiltersElements} {
        height: 245px;
        opacity: 1;
      }
      opacity: 1;
      border-bottom: 2px solid #dbd0ac;
    `};
`;

export const FilterElement = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding: 15px;
  font-size: 15px;
  font-weight: 300;
  box-sizing: border-box;

  ${({ isChangedFilter }) =>
    isChangedFilter &&
    css`
      background: #e0d9c1;
    `};
`;
