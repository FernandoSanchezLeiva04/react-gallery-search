import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: #fff;

  border-radius: 1rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }

  @media only screen and (min-width: 1280px) {
    width: 30%;
  }
`;

export const Content = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px;
`;

interface ImageProps {
  readonly url?: string;
}

export const Image = styled.div<ImageProps>`
  background: url(${(props) => props.url}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 350px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 40px;

  .button {
    background: #000;
    color: #fff;
    border: none;
    margin: 1px;
    width: 150px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 20px;
    text-decoration: none;
  }
`;

export const Author = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin: 30px 0;
`;
