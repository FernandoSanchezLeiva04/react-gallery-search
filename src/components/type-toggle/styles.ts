import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px;

  .toggle {
    &__photos,
    &__videos {
      background: #000;
      color: #fff;
      border: none;
      margin: 1px;
      width: 100px;
      text-align: center;
      padding: 10px;
      cursor: pointer;

      &.disabled{
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
      }
    }

    &__photos {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    &__videos {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;
