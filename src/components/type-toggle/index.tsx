import React from "react";
import { Wrapper } from "./styles";

interface Props {
  handlePhotosClick?: () => void;
  handleVideosClick?: () => void;
  activeBtn?: string;
}
const TypeToggle = (props: Props) => {
  const { handlePhotosClick, handleVideosClick, activeBtn } = props;
  return (
    <Wrapper>
      <button
        className={`toggle__photos ${activeBtn === "videos" ? "disabled" : ""}`}
        onClick={handlePhotosClick}
      >
        Photos
      </button>
      <button
        className={`toggle__videos ${activeBtn === "photos" ? "disabled" : ""}`}
        onClick={handleVideosClick}
      >
        Videos
      </button>
    </Wrapper>
  );
};

export default TypeToggle;
