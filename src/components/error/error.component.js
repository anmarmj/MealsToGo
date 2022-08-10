import { Text } from "../typography/text.component";
import { IconPNG, ErrorContainer } from "./error.styles";
import { Spacer } from "../spacer/spacer.component";
import React from "react";

const ErrorComp = ({ children }) => {
  return (
    <ErrorContainer>
      <IconPNG source={require("../../../assets/error.png")} />
      <Text variant="error">{children}</Text>
    </ErrorContainer>
  );
};

export default ErrorComp;
