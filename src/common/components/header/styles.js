import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 2px solid rgb(219, 208, 172);

  h2 {
    font-family: "Miller Banner";
    font-weight: 300;
    margin: 0;
    text-transform: capitalize;
    font-size: 22px;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  left: 15px;
`;
