import React from "react";
import { MastheadWrapper, Paragraph, Title } from "./styles";

interface MastheadProps {
  readonly imagePath?: string;
  readonly title?: string;
  readonly paragraph?: string;
}

const Masthead = (props: MastheadProps) => {
  const { imagePath, title, paragraph } = props;

  return (
    <MastheadWrapper imagePath={imagePath}>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
    </MastheadWrapper>
  );
};

export default Masthead;
