import React from "react";
import { Loading, LoaderContainer } from "./loader.styls";

export const Loader = () => {
  return (
    <LoaderContainer>
      <Loading source={require("../../../assets/loader.gif")} />
    </LoaderContainer>
  );
};
