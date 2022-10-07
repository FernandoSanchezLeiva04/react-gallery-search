import styled from "styled-components";

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 100px;
  justify-content: center;

  @media only screen and (min-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 1280px) {
  }

  .search {
    &__input {
      width: 60%;
      -webkit-appearance: none;
      border: 0;
      outline: 0;
      padding: 10px 15px;
      text-align: left;
      border: 1px solid #fff;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      border: 1px solid #000;

      @media only screen and (min-width: 767px) {
        justify-content: flex-end;
      }

      @media only screen and (min-width: 1280px) {
      }
    }

    &__cta {
      width: 100px;
      -webkit-appearance: none;
      border: 0;
      outline: 0;
      padding: 10px 15px;
      text-align: center;
      border: 1px solid #000;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      background: #000;
      color: #fff;
      cursor: pointer;
    }
  }
`;
