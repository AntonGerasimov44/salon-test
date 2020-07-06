import styled, { css } from "styled-components";

export const MainContainer = styled.div``;

export const Menu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  position: relative;
`;

export const MenuElement = styled.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #202020;
  font-size: 15px;
  font-weight: normal;
  text-transform: capitalize;
`;

export const ChangedMenuLine = styled.div`
  position: absolute;
  width: 50%;
  bottom: 0;
  transition: 0.4s;
  height: 2px;
  background: #b69f58;
  content: "";

  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `};
`;
