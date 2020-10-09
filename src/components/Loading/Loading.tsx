import React from "react";
import LoadingWrapper from "./Loading.element";
import loading_gif from "../../assets/gif/loading.gif";

function Loading() {
  return (
    <LoadingWrapper>
      <img src={loading_gif} alt="loading GIF" />
    </LoadingWrapper>
  );
}

export default Loading;
