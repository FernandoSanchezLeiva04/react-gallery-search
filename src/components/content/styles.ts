import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 70px 20px;

  @media only screen and (min-width: 767px) {
    padding: 50px;
    gap: 50px 10px;
  }

  @media only screen and (min-width: 1280px) {
    // padding: 100px;
  }
`;

export const NoData = styled.div`
  width: 100%;
  padding: 100px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
