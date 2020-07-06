import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 20px;
  padding: 0 15px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
`;

export const InfoElement = styled.div`
  padding: 15px 0;
  display: flex;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 300;
  font-weight: normal;
  letter-spacing: normal;

  img {
    margin-right: 14px;
  }

  :last-child {
    border-bottom: none;
    color: #2b2b2b;
    line-height: 1.47;
  }
`;

export const NoDataBlock = styled.div`
  width: 100%;
  font-size: 15px;
  text-align: center;
  padding-top: 30px;
`;
