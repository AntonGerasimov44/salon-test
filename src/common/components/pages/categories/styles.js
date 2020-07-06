import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const CategoryElement = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 15px 0;
  border-bottom: 1px solid #eeeeee;
  font-weight: 300;
  box-sizing: border-box;
  font-size: 20px;
  color: #000;
`;
