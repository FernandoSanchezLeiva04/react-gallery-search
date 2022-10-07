import React from "react";
import { CardWrapper, Image, Author, Content, ButtonWrapper } from "./styles";

interface CardProps {
  readonly avgColor?: string;
  readonly photographer?: string;
  readonly photographerId?: number;
  readonly url?: string;
  readonly photographer_url?: string;
  readonly photo?: string;
}

const Card = (props: CardProps) => {
  const { photo, photographer_url, photographer, photographerId, url } = props;
  return (
    <CardWrapper>
      <Image url={url} />
      <Content>
        {photographer && (
          <Author>
            by <a href={photographer_url}>{photographer}</a>
          </Author>
        )}
        <ButtonWrapper>
          <a className='button' href={photo} target='__blank' download>
            Download
          </a>
        </ButtonWrapper>
      </Content>
    </CardWrapper>
  );
};

export default Card;
