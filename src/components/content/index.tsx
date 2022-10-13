import React from "react";
import { Results } from "../../typing/main";
import Card from "../card";
import { NoData, Wrapper } from "./styles";
import _ from "lodash";

interface Props {
  readonly data?: {
    slug?: string;
    results?: Results;
  };
}

export const Content = (props: Props) => {
  const { data } = props;

  if (_.isEmpty(data?.results)) {
    return (
      <NoData>
        <h2>No results</h2>
      </NoData>
    );
  }

  return (
    <>
      <Wrapper>
        <h2>Results for {data?.slug}</h2>
      </Wrapper>
      <Wrapper>
        {data?.results &&
          data?.results?.photos?.map((photo, index) => {
            return (
              <Card
                key={index}
                photographer={photo.photographer}
                avgColor={photo.avg_color}
                photographerId={photo.photographer_id}
                url={photo.src?.medium}
                photographer_url={photo.photographer_url}
                photo={photo.src?.original}
              />
            );
          })}
      </Wrapper>
    </>
  );
};
