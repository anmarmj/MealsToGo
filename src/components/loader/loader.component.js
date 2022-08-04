import React from "react";
import { Colors } from "react-native-paper";
import { Loading, LoaderContainer } from "./loader.styls";

export const Loader = () => {
  return (
    <LoaderContainer>
      <Loading size="large" color={Colors.blue100} />
    </LoaderContainer>
  );
};
