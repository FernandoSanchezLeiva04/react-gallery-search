import styled from "styled-components";

interface WrapperProps {
  imagePath?: string;
}

export const MastheadWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 736px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 25px;
  color: #fff;

  background: url(${(props) => props.imagePath}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: -999;

  @media only screen and (min-width: 767px) {
    gap: 25px;
    padding: 0 50px;
  }

  @media only screen and (min-width: 1280px) {
    gap: 30px;
    padding: 0 100px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  overflow-wrap: break-word;
  width: auto;

  @media only screen and (min-width: 767px) {
    font-size: 64px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 96px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 20px;
  overflow-wrap: break-word;
  width: auto;

  @media only screen and (min-width: 767px) {
    font-size: 36px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 52px;
  }
`;
